/* jshint node: true */
module.exports = function (grunt) {
    'use strict';

    var path = require('path');
    // Project configuration.
    var gruntConfig = {

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Build here requires jQuery") }\n\n',

        // cleanup in the public dir
        clean: {
            dist: {
                options: {force: true},
                src: [
                    '!public/**/{.svn}',
                    '.public/**/*.*',
                    '!public/js/*.js',
                    '!public/{.svn}',
                    '!public/css/old-css/*.css',

                    'public/*.{dev,min}.{js}',
                ]
            },
            css: {
                options: {force: true},
                src: [
                    'public/css/**/*.css'
                ]
            }
        },

        json_generator: {
            target: {
                dest: "version.json",
                options: {
                    version: "1.0.0"
                }
            }
        },

        watch: {
            sass: {
                files: ['../../css/**/**/*.scss', '../../css/**/**/*.sass', 'stylesheets/*.scss'], tasks: ['clean:css', 'dist-css']
            }
        },

        compass: {
            dev: {
                options: {
                    basePath: '',
                    config: 'config.rb'
                }
            }
        },

        express: {
            dev: {
                options: {
                    port: 3000,
                    server: path.resolve('server'),
                    hostname: '0.0.0.0'
                }
            }
        },

    };//end gruntconfig


    grunt.initConfig(gruntConfig);

    // Loads in plugins from package.json file.
    require('load-grunt-tasks')(grunt);

    //copy files in place in public folder
    grunt.registerTask('dist-static', ['copy']);

    // CSS distribution task.
    grunt.registerTask('dist-css', ['compass']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-css']);

    // Default task.
    grunt.registerTask('default', ['dist', 'json_generator', "express", "watch"]);

};
