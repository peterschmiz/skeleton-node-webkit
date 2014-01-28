module.exports = function(grunt) {
	'use strict';

	var config = {
		options: {
			build_dir: './build',
			mac: true,
			win: true,
			linux32: false,
			linux64: false
		},
		src: ['./compile/**/*']
	};


	return config;
};