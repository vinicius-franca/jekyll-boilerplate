module.exports = function(grunt) {
const imagemin = require('imagemin');
grunt.initConfig({
    imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 5,
                progressive: true
            },
            files: [{
                expand: true,
                cwd: 'web-dist/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'web-dist/dist/'
            }]
        }
    }
});
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
};