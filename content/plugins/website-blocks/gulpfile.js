/**
 * Created by floris on 02/09/2019.
 */

/**
 * Paths.
 */
const config = {
    sass_path: './resources/sass/',
    js_path: './assets/js/',
    css_path: './assets/css/'
};

/**
 * Gulp libs.
 */
const gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    livereload = require( 'gulp-livereload' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    rename = require( 'gulp-rename' ),
    notify = require( 'gulp-notify' ),
    cleanCSS = require( 'gulp-clean-css' ),
    uglify = require( 'gulp-uglify' );

/**
 * Listen to files that changes.
 */
gulp.task( 'listen', function () {

    livereload.listen();

    return gulp.watch( config.sass_path + '**/*.scss', gulp.series( [ 'watch-sass' ] ) );
} );

/**
 * Converts Sass code into .css files on change.
 */
gulp.task( 'watch-sass', function () {
    return gulp.src( config.sass_path + '**/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.css_path + 'dist/' ) )
        .pipe( livereload() );
} );

/**
 * Build dist CSS file.
 */
gulp.task( 'build-custom-css', function () {
    return gulp.src( [ config.css_path + 'dist/*.css', '!' + config.css_path + 'dist/*.min.css' ] )
        .pipe( cleanCSS( { compatibility: 'ie8', level: { 1: { specialComments: 0 } } } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( config.css_path + 'dist' ) )
        .pipe( notify( "Custom CSS was built" ) );
} );

gulp.task( 'default', gulp.parallel( 'listen' ) );
gulp.task( 'build', gulp.series( [ 'build-custom-css' ] ) );
