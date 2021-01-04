module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				  '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
			  },
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/app.js'
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['concat', 'ngtemplates'],
				options: {
					spawn: false
				}
			}
		},
		ngtemplates:  {
			app:        {
			  src:      'templates/**.html',
			  dest:     'dist/templates.js'
			}
		  }
	});    

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('default', ['concat', 'ngtemplates', 'watch']);
}