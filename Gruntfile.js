module.exports = function(grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	bower: {
	    install: {}
	},
	requirejs: {
	    compile: {}
	}
    });
    
    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');

    // Default task(s).
    grunt.registerTask('default', []);
    
};
