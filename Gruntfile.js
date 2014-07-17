module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// tasks
		jscs: {
			src: 'src/js/Enum.js',
			options: {
				config: 'bower_components/gwa-codestyle/rc/.jscsrc'
			}
		},

		jshint: {
			options: {
				jshintrc: 'bower_components/gwa-codestyle/rc/.jshintrc'
			},
			src: [
				'src/js/Enum.js'
			]
		},

		jasmine: {
			mytask: {
				options: {
					vendor: [
						'bower_components/requirejs/require.js'
					],
					specs: [
						'tests/Enum.test.js'
					],
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfig: {
							baseUrl: './',
							paths: {
								'Gwa.Event.Dispatcher': 'bower_components/gwa-event-dispatcher/dist/Dispatcher',
								'Gwa.Data.Enum': 'src/js/Enum'
							}
						}
					}
				}
			}
		},

		copy: {
			main: {
				files: [
					{src:'src/js/Enum.js', dest:'dist/Enum.js'}
				]
			}
		},

		uglify: {
			main: {
				files: {
					'dist/Enum.min.js': ['src/js/Enum.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask(
		'default',
		[
			'jscs',
			'jshint:src',
			'jasmine',
			'copy',
			'uglify'
		]
	);

};
