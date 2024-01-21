module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                    'assets/css/dev/microclearfix.css',
                    'assets/css/dev/style.css'
                ],
                dest: 'assets/css/built/style.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/built/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css/',
                    ext: '.min.css'
                }]
            }
        },

        concat: {
            ipsc_class: {
                src: [
                    'assets/js/dev/IPSC_Class.js'
                ],
                dest: 'assets/js/built/IPSC_Class.js'
            },
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
                    'assets/js/IPSC_Class.min.js': 'assets/js/built/IPSC_Class.js',
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
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

    // Handling custom scripts
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks( 'grunt-concat-css' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    /**
     * TASKS
     */
    // CSS
    grunt.registerTask( 'css', [ 'concat_css', 'cssmin' ] );

    // JS
    grunt.registerTask( 'js', [ 'concat', 'uglify' ] );

    // WATCHER
    grunt.registerTask( 'live', [ 'css', 'js', 'watch' ] );
};