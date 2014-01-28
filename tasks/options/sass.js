module.exports = function(grunt, pkg) {
	'use strict';

	var build = './compile/css';
	var temp = './src/temp';
	var source = './src/scss';

	var config = {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			sourcemap: false,
			trace: false,
			style: 'expanded',
			precision: 3,
			quiet: false,
			debugInfo: true,
			lineNumbers: true,
			noCache: false,
			cacheLocation: temp + '/.sass-cache'
		},

		prod: {
			options: {
				sourcemap: false,
				style: 'compressed',
				quiet: true,
				debugInfo: false,
				lineNumbers: false,
				noCache: true
			},
			files: [{
				expand: true,
				cwd: source,
				src: ['*.scss'],
				dest: build,
				ext: '.css'
			}]
		}
	};

	return config;
};