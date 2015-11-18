module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			port: 8080,
			folder: "app/www"
		}
	});

	grunt.registerTask("default", function() {

		const
			http = require("http"),
			express = require("express");

		let
			app = express(),
			server = http.createServer(app),
			config = grunt.config();

		app.use(express.static(config.webServer.folder));

		server.listen(config.webServer.port, function() {
			console.log("web server started on port " +
				config.webServer.port);
		});

		this.async();

	});

};
