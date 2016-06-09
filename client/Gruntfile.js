module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			my_target: {
				files: [{
					src: 'js/app/**/*.js',
					dest: 'js/min/',
					expand: true,
					flatten: true,
					ext: '.min.js'
				}]
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css'],
		      dest: 'css/',
		      ext: '.min.css'
		    }]
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['uglify', 'cssmin']);
};