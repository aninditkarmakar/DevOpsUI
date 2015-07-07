/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            scripts: {
                options: {
                    beautify: true
                },
                files: {
                    'wwwroot/js/app.js': [
                            'Scripts/app.js', 
                            'Scripts/Recipes/**/*.js',
                            'Scripts/Controllers/**/*.js'
                    ]
                }
            }
        },
        
        cssmin: {
            stylesheets: {
                src: ['Stylesheets/style.css'],
                dest: 'wwwroot/css/style.min.css'
            }
        },

        copy: {
            debug: {
                files: [
                    {
                        expand: true,
                        cwd: 'Scripts/',
                        src: '**',
                        dest: 'wwwroot/js'
                    },
                    {
                        expand: true,
                        cwd: 'Partials/',
                        src: '**',
                        dest: 'wwwroot/partials'
                    }
                ]
            },
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'Partials/',
                        src: '**',
                        dest: 'wwwroot/partials'
                    }
                ]
            }
        },
        
        watch: {
            Debug: {
                files: ['Scripts/**/*.js', 'Stylesheets/**/*.css', 'Partials/**/*.html'],
                tasks: ['copy:debug', 'cssmin']
            },
            Release: {
                files: ['Scripts/**/*.js', 'Stylesheets/**/*.css', 'Partials/**/*.html'],
                tasks: ['uglify', 'cssmin', 'copy:release'],
            }
        }
    });

    grunt.registerTask("debugTasks", ['watch:Debug']);
    grunt.registerTask("releaseTasks", ['watch:Release']);
};