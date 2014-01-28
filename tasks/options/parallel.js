module.exports = function(grunt, pkg) {
	'use strict';

	var config = {
		options: {
			stream: true
		},
		test: {
			tasks: [{
				grunt: true,
				args: ['middleman-server']
			},
			{
					grunt: true,
					args: ['scss-watch']
			}]
		}
	};

	return config;
};