
/*
 * Layout Design Helper JS
 * Copyright 2015 Michael Golenia
 * Licensed under MIT
 */

"use strict";

var colorList = colorList || ['#DF0101','#01DF01','#0101DF','#DFDF01'];

if(typeof no_ldhjs === 'undefined') var prototype = true;

var saveOnLoad = window.onload;

window.onload = function() {
  if(!prototype) return false;

  var htmlBlockElements = {
    "div" :  document.getElementsByTagName('div'),
    "header" : document.getElementsByTagName('header'),
    "footer" : document.getElementsByTagName('footer'),
    "nav" : document.getElementsByTagName('nav'),
    "table" : document.getElementsByTagName('table')
  };

  function setElementStyles(elements) 
  {
    for(var element in elements) {
      var e = elements[element];

      // Avoid Uncaught TypeError: Cannot set property 'backgroundColor' of undefined
      if (typeof e !== 'object') break;

      e.style.backgroundColor = e.style.backgroundColor || colorList[element%colorList.length]

      if(e.id != '') e.innerHTML += ' id="'+e.id+'"';
      if(e.className != '') e.innerHTML += ' class="'+e.className+'"';
      if(e.innerHTML == '') e.innerHTML = '&nbsp;'
    }
  }

  for(var htmlBlockElement in htmlBlockElements)
  {
    setElementStyles(htmlBlockElements[htmlBlockElement]);
  }
  
  window.onload = saveOnLoad;
};