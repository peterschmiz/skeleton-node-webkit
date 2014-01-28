module.exports = function (grunt) {

	var done;
	var process = require('child_process').spawn;

	var build = './compile/css';
	var temp = './src/temp';
	var source = './src';

	grunt.registerTask('scss-watch', 'SCSS watch', function () {
		done  = this.async();

		var command = process('scss', ['--watch', '--trace', '--style', 'expanded', source + '/scss' + ':' + temp + '/css']);

		command.stdout.on('data', logMessage);
		command.stderr.on('data', logMessage);
		command.on('close', function(code) {
			command.kill();
			completeTask(code);
		});
	});


	//TODO: fix for error output
	grunt.registerTask('scss-compile', 'SCSS compile', function () {
		done  = this.async();

		var command = process('scss', ['--update', '--force', '--style compressed', source + '/scss' + ':' + build + '/css']);

		command.stdout.on('data', logMessage);
		command.stderr.on('data', logMessage);
		command.on('close', function(code) {
			command.kill();
			completeTask(code);
		});
	});

	function logMessage(data) {
		var message = data.toString().replace(/^\s*[\r\n]/gm,"");
		grunt.log.write(message);
	}

	function completeTask(code) {
		var error;
		if (code !== 0) {
			error = new Error("Failed to complete Middleman build task. See output for errors.");
		}
		done(error);
	}

};