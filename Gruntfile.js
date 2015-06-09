module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> by <%= pkg.author %> Last Update <%= grunt.template.today("yyyy-mm-dd") %> License: <%= pkg.license %> */\n'
      },
      build: {
        src: 'ldh.js',
        dest: 'ldh.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};