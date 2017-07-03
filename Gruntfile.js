module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: 'assets/lib',
                    layout: 'byType'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [ 'assets/lib/fonts/font-awesome/*' ],
                        dest: 'assets/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        },

        concat_css: {
            normalize: {
                src: ['assets/lib/css/normalize-css/*.css'],
                dest: 'assets/css/vendor/normalize.css'
            },
            fontawesome: {
                src: ['assets/lib/css/font-awesome/*.css'],
                dest: 'assets/css/vendor/font-awesome.css'
            },

            app: {
                src: [
                    'assets/css/vendor/normalize.css',
                    'assets/css/vendor/font-awesome.css',
                    'assets/css/dev/style.css'
                ],
                dest: 'assets/css/built/style.css'
            }
        },

        postcss: {
            options: {
                map: {
                    inline: false
                },

                processors: [
                    require('pixrem')(),
                    require('autoprefixer')({browsers: 'last 2 versions'}),
                    require('cssnano')({zindex: false})
                ]
            },
            app: {
                src: 'assets/css/built/style.css',
                dest: 'assets/css/style.min.css'
            }
        },

        concat: {
            app: {
                src: [
                    'assets/js/dev/script.js'
                ],
                dest: 'assets/js/built/script.js'
            }
        },

        uglify: {
            main: {
                options: {
                    sourceMap: true
                },
                files: {
                    'assets/js/script.min.js': 'assets/js/built/script.js'
                }
            }
        },

        watch: {
            stylesheets: {
                files: ['assets/css/dev/*.css'],
                tasks: ['concat_css', 'postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            scripts: {
                files: ['assets/js/dev/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            html: {
                files: ['**/*.html', '**/*.php'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    // Handling dependencies
    grunt.loadNpmTasks( 'grunt-bower-task' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

    // Handling custom scripts
    grunt.loadNpmTasks( 'grunt-concat-css' );
    grunt.loadNpmTasks( 'grunt-postcss' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    /**
     * TASKS
     */
    // BOWER
    grunt.registerTask( 'load', [ 'bower', 'copy' ] );

    // CSS
    grunt.registerTask( 'css', [ 'concat_css', 'postcss' ] );

    // JS
    grunt.registerTask( 'js', [ 'concat', 'uglify' ] );

    // WATCHER
    grunt.registerTask( 'live', [ 'css', 'js', 'watch' ] );
};