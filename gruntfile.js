module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					environment: 'production'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['sass/*.scss', 'css/*.css', 'less/*.less'],
				tasks: ['compass']
			},
			php: {
				files: ['**/*.php']
			},
			javascript: {
				files: ['**/app.js']
			}
		},
	});
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-contrib-watch');

		grunt.registerTask("live-reload", ['watch']);
}
	

