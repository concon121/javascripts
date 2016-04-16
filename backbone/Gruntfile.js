/* jshint node: true */
module.exports = function (grunt) {
    'use strict';

    var path = require('path');
    var handlebars = require("handlebars");
    // Project configuration.
    var gruntConfig = {

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Build here requires jQuery") }\n\n',

        jshint: {
            options: {
                jshintrc: 'javascripts/.jshintrc'
            }, gruntfile: {
                src: 'Gruntfile.js'
            }, src: {
                src: [
                    '!javascripts/templates/template.js',
                    'javascripts/models/*.js',
                    'javascripts/views/*.js',
                    'javascripts/*.js'
                ]
            }
        },

        concat: {
            options: {
                stripBanners: false
            },
            app: {
                src: [
                    'javascripts/models/*.js',
                    'javascripts/templates/templates.js',
                    'javascripts/views/*.js',
                    'javascripts/router.js',
                    'javascripts/main.js'
                ],
                dest: 'public/registration.app.js'
            },
            thirdparty: {
                src: [
                  'javascripts/thirdparty/underscore-min.js',
                  'javascripts/thirdparty/jquery.min.js',
                  'javascripts/thirdparty/jquery-ui.min.js',
                  'javascripts/thirdparty/jquery.validate.min.js',
                  'javascripts/thirdparty/handlebars.min.js',
                  'javascripts/thirdparty/handlebars.runtime.min.js',
                  'javascripts/thirdparty/backbone-min.js',
                ],
                dest: 'public/registration.thirdparty.js'
            }

        }, uglify: {
            //see https://github.com/gruntjs/grunt-contrib-uglify#uglify-task for available options
            options: {
                report: 'min', mangle: true, beautify: {
                    beautify: false, indent_level: 2, space_colon: false
                    , ascii_only: true, quote_keys: true
                }, preserveComments: false
            }, 'public/registration.min.js': ['<%= concat.thirdparty.dest %>', '<%= concat.app.dest %>']
        },

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
            src: {
                files: ['javascripts/**/*.js'], tasks: ['jshint', 'dist-js']
            }, hbs: {
                files: ['javascripts/templates/**/*.handlebars'], tasks: ['exec', 'jshint', 'dist-js']
            }, sass: {
                files: ['stylesheets/**/*.scss', 'stylesheets/**/*.sass'], tasks: ['clean:css', 'dist-css']
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

        exec: {
            list_files: {
                cmd: 'handlebars javascripts/templates/ > javascripts/templates/templates.js'
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

    // JS distribution task.
    grunt.registerTask('dist-js', ['concat', 'uglify']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);

    // Default task.
    grunt.registerTask('default', ['exec', 'jshint', 'dist', 'json_generator', "express", "watch"]);

};
