module.exports = function (grunt) {

	var done;
	var process = require('child_process').spawn;

	grunt.registerTask('middleman-build', 'Middleman build', function () {
		done  = this.async();

		//TODO: ADD --verbose parameter if requested
		//var command = process('middleman', ['build', '--verbose']);
		var command = process('middleman', ['build']);

		command.stdout.on('data', logMessage);
		command.stderr.on('data', logMessage);

		command.on('close', function(code) {
			command.kill();
			completeTask(code);
		});
	});


	//TODO: fix for error output
	grunt.registerTask('middleman-server', 'Middleman server', function () {
		done  = this.async();

		var command = process('middleman', ['server']);

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