
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

  var htmlElemente = {
    "div" :  document.getElementsByTagName('div'),
    "header" : document.getElementsByTagName('header'),
    "footer" : document.getElementsByTagName('footer'),
    "nav" : document.getElementsByTagName('nav'),
  };

  var indexColor = 0;

  function getNextColor() {
    var color = colorList[indexColor];
    indexColor = (indexColor + 1) % (colorList.length);

    return color;
  }

  function setElementStyles(elements) 
  {
    for(var element in elements) {
      var e = elements[element];

      if (typeof e !== 'object') break;

      e.style.backgroundColor = getNextColor();

      if(e.id != '') e.innerHTML += ' id="'+e.id+'"';

      if(e.className != '') e.innerHTML += ' class="'+e.className+'"';
      if(e.innerHTML == '') e.innerHTML = '&nbsp;'
    }
  }

  for(var htmlElement in htmlElemente)
  {
    setElementStyles(htmlElemente[htmlElement]);
  }
  
  window.onload = saveOnLoad;
};