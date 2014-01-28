module.exports = function (grunt) {

	// Usage:
	// grunt test
	//      - to run Middleman and SCSS compile, test app at http://localhost:4567
	// grunt build
	//      - to build distribution ready version of the app


	var pkg = grunt.file.readJSON('package.json');

	// Project configuration
	var fullConfig = JSON.parse(JSON.stringify(loadConfig('./tasks/options/')));
	fullConfig.pkg = pkg

	grunt.initConfig(fullConfig);

	// Load package tasks
	require('load-grunt-tasks')(grunt);

	// Load external tasks
	grunt.loadTasks('./tasks');

	function loadConfig(path) {

		var externalConfig = {};
		var key;

		var files = grunt.file.expand({cwd: path}, "*.js");

		files.forEach(function(option) {
			key = option.replace(/\.js$/,'');
			externalConfig[key] = require(path + option)(grunt, pkg);
		});

		return externalConfig;
	}

	grunt.registerTask('default', ['build']);
	grunt.registerTask('test', ['parallel:test']);

	grunt.registerTask('build', [
		'bumpup:minor',
		'middleman-build',
		'sass:prod',
		'nodewebkit'
	]);

};