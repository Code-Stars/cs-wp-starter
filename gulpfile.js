'use strict';

/**
 * Tasks for front-end development and building styles
 * and script files for production environment.
 *
 * @author Floris Weijenburg <Contact@Codestars.nl>
 * @version 05-06-2019
 */
let theme_path = './content/themes/cs-starter-theme/';

// libs
const gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    livereload = require( 'gulp-livereload' ),
    cleanCSS = require( 'gulp-clean-css' ),
    rename = require( 'gulp-rename' ),
    concat = require( 'gulp-concat' ),
    uglify = require( 'gulp-uglify' ),
    clean = require( 'gulp-clean' ),
    notify = require( "gulp-notify" ),
    cache = require( 'gulp-cache' ),
    imageminPngquant = require( 'imagemin-pngquant' ),
    imageminZopfli = require( 'imagemin-zopfli' ),
    imageminMozjpeg = require( 'imagemin-mozjpeg' ), //need to run 'brew install libpng'
    imagemin = require( 'gulp-imagemin' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    webpackStream = require( 'webpack-stream' ),
    webpack = require( 'webpack' ),
    file = require( 'gulp-file' );

// config
const config = {
    image_path: theme_path + 'assets/images/',
    js_path: theme_path + 'assets/js/',
    css_path: theme_path + 'assets/css/',
    sass_path: theme_path + 'resources/sass/',
    es6_path: theme_path + 'resources/es6/',
    vendor_path: theme_path + 'resources/vendor/',
    clean_app: true,
    image_min: [
        //png
        imageminPngquant( {
            speed: 1,
            quality: [ 0.95, 1 ] //lossy settings
        } ),
        imageminZopfli( {
            more: true
            // iterations: 50 // very slow but more effective
        } ),
        //gif
        imagemin.gifsicle( {
            interlaced: true,
            optimizationLevel: 3
        } ),
        //svg
        imagemin.svgo( {
            plugins: [ {
                removeViewBox: false
            } ]
        } ),
        //jpg lossless
        imagemin.jpegtran( {
            progressive: true
        } ),
        //jpg very light lossy, use vs jpegtran
        imageminMozjpeg( {
            quality: 90
        } )
    ]
};

// output current build version
function deploy_version( dist_path ) {
    let uniqueVersion = Date.now() + ( (Math.random() * 100000).toFixed());

    return gulp.src( 'src/**' )
        .pipe( file( 'version.txt', uniqueVersion.toString() ) )
        .pipe( gulp.dest( theme_path + dist_path ) );
}

// watch for changes and refresh browser
gulp.task( 'watch', function () {

    livereload.listen();

    // SASS files
    gulp.watch( config.sass_path + '**/*.scss', gulp.series( 'watch-sass' ) );

    // ES6 files
    gulp.watch( config.es6_path + '**/**/*.js', gulp.series( 'watch-es6' ) );

    // HTML files
    gulp.watch( theme_path + '**/*.html' ).on( 'change', function ( files ) {
        livereload.changed( files );
    } );

    // PHP files
    return gulp.watch( theme_path + '**/*.php' ).on( 'change', function ( files ) {
        livereload.changed( files );
    } );
} );

// build app.css
gulp.task( 'watch-sass', function () {
    return gulp.src( config.sass_path + '**/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.css_path + 'dist/' ) )
        .pipe( livereload() );
} );

// build app.min.css
gulp.task( 'build-custom-css', function () {

    deploy_version( 'assets/css/dist/' );

    return gulp.src( config.css_path + 'dist/app.css' )
        .pipe( cleanCSS( { compatibility: 'ie8', level: { 1: { specialComments: 0 } } } ) )
        .pipe( rename( { suffix: '.min', basename: 'app' } ) )
        .pipe( gulp.dest( config.css_path + 'dist' ) )
        .pipe( notify( "Custom CSS was built" ) );
} );

// build app.js
gulp.task( 'watch-es6', function () {

    let configPath = config.es6_path + 'config/dev.webpack.config.js';

    return gulp.src( config.es6_path + '/app.js' )
        .pipe( webpackStream( require( configPath ) ) )
        .pipe( gulp.dest( config.js_path + 'dist/' ) )
        .pipe( livereload() );
} );

// build app.min.js
gulp.task( 'build-custom-script', function () {

    let configPath = config.es6_path + '/config/prod.webpack.config.js';

    deploy_version( 'assets/js/dist/' );

    return gulp.src( config.es6_path + '/app.js' )
        .pipe( webpackStream( require( configPath ), webpack ) )
        .pipe( rename( { suffix: '.min', basename: 'app' } ) )
        .pipe( gulp.dest( config.js_path + 'dist' ) )
        .pipe( notify( "Custom es6 built for production" ) );
} );

// build vendor.min.css
gulp.task( 'build-vendor-css', function () {
    return gulp.src( [
        // libs to include
        config.vendor_path + 'flexboxgrid/flexboxgrid.min.css',
        config.vendor_path + 'cs-dialog/cs-dialog.min.css',
        config.vendor_path + 'fontawesome/fontawesome.css',
        config.vendor_path + 'animate/animate.css',
        config.vendor_path + 'slick/slick.css'
    ] )
        .pipe( concat( 'vendor.css' ) )
        .pipe( gulp.dest( config.css_path + 'dist' ) )
        .pipe( cleanCSS( { compatibility: 'ie8', level: { 1: { specialComments: 0 } } } ) )
        .pipe( rename( { suffix: '.min', basename: 'vendor' } ) )
        .pipe( gulp.dest( config.css_path + 'dist' ) )
        .pipe( notify( "Vendor CSS was built" ) );
} );

// compress all images in assets/images folder
gulp.task( 'image-compress', function () {
    return gulp.src( theme_path + 'assets/images-src/*.+(jpg|jpeg|gif|png|svg|svg.php)' )
        .pipe( imagemin( {
            interlaced: true,
            progressive: true,
            optimizationLevel: 10,
            verbose: true
        } ) )
        .pipe( cache( imagemin( config.image_min ) ) )
        .pipe( gulp.dest( config.image_path ) );
} );

// build vendor.min.js
gulp.task( 'build-vendor-script', function () {
    gulp.src(
        [
            // HERE we add the wanted vendor scripts
            // and we must load them in the right order.
            config.vendor_path + 'jquery/jquery-ui.js',
            config.vendor_path + 'cs-dialog/cs-dialog.js',
            config.vendor_path + 'bg-srcset/bg-srcset.js',
            config.vendor_path + 'slick/slick.js',
            config.vendor_path + 'parallaxjs/parallax.js'
        ] )
        .pipe( sourcemaps.init() )
        .pipe( concat( 'vendor.js' ) )
        .pipe( sourcemaps.write( './' ) ) // creates vendor.js.map
        .pipe( gulp.dest( config.js_path + 'dist' ) );

    return gulp.src( config.js_path + 'dist/vendor.js' )
        .pipe( uglify() )
        .pipe( rename( { suffix: '.min', basename: 'vendor' } ) )
        .pipe( gulp.dest( config.js_path + 'dist' ) )
        .pipe( notify( "Vendor JS was built" ) );
} );

gulp.task( 'default', gulp.parallel( 'watch' ) );
gulp.task( 'images', gulp.parallel( 'image-compress' ) );
gulp.task( 'build', gulp.series( [ 'build-custom-css', 'build-vendor-css', 'build-custom-script', 'build-vendor-script' ] ) );