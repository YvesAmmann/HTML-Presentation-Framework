// grunt-workflow-presentation | 20151014 | version 1.1.0
module.exports = function(grunt) {
	var dist = '../dist';

	grunt.registerTask(
		'default',
		function() {
			grunt.task.run(
				[
					'build',
					'watch'
				]
			);
		}
	);

	grunt.registerTask(
		'build',
		[
			'css',
			'js',
			'presentation'
		]
	);

	grunt.registerTask(
		'css',
		[
			'sass',
			'autoprefixer',
			'cssmin'
		]
	);

	grunt.registerTask(
		'js',
		[
			'includes:js',
			'uglify'
		]
	);

	grunt.registerTask(
		'presentation',
		[
			'includes:layout',
			'rename',
			'cssUrlEmbed',
			'htmlmin',
			'clean'
		]
	);

	grunt.initConfig({
		sass: {
			default: {
				files: [{
					expand: true,
					cwd: '../src/css',
					src: ['*.scss'],
					dest: dist,
					ext: '.css'
				}]
			}
		},

		autoprefixer: {
			default: {
				options: {
					browsers: ['last 6 versions']
				},
				src: dist + '/*.css'
			},
		},

		cssmin: {
			default: {
				src: [
					dist + '/layout.css'
				],
				dest: dist + '/layout.css'
			}
		},

		includes: {
			js: {
				src: [ 'app.js'],
				cwd: '../src/js',
				dest: dist,
				options: {
					flatten: true
				}
			},

			layout: {
				src: [ 'layout.html'],
				cwd: '../src',
				dest: dist,
				options: {
					flatten: true
				}
			}
		},

		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: [{
					expand: true,
					cwd: dist,
					src: '*.js',
					dest: dist
				}]
			}
		},

		rename: {
			dist: {
				files: [{
					src: [dist +'/layout.html'],
					dest: dist + '/index.html',
				}]
			}
		},

		cssUrlEmbed: {
			encodeDirectly: {
				files: [{
					src: [dist +'/index.html'],
					dest: dist + '/index.html'
				}]
			}
		},

		htmlmin: {
			default: {
				options: {
					removeComments: false,
					collapseWhitespace: true
				},
				files: [{
					src: [dist +'/index.html'],
					dest: dist + '/index.html'
				}]
			}
		},

		clean: {
			options: {
				force: true
			},
			dist: [
				dist + '/*',
				'!' + dist + '/index.html',
			]
		},

		watch: {
			default: {
				files: ['../src/**/*'],
				tasks: [
					'build'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-css-url-embed');
};
