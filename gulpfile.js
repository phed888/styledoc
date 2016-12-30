var gulp = require('gulp');
var data = require('gulp-data'); // access to data files
var stylus = require('gulp-stylus'); // compile stylus to css
var jeet = require('jeet'); // grid system for stylus
var rupture = require('rupture'); // responsive breakpoints for stylus
var plumber = require('gulp-plumber'); //handles errors in gulp plugins
var notify = require('gulp-notify'); //error notifications
var stylint = require('gulp-stylint'); //linter for stylus
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var fs = require('fs');

//----------------------------------
//----- Error
//----------------------------------
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            //Customizing error title
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
            sound: "Funk"
        })
    });
}

//----------------------------------
//----- Nunjucks
//----------------------------------
gulp.task('nunjucks', function() {
   return gulp.src('app/pages/**/*.+(html|nunjucks)')
       .pipe(customPlumber('Error running Nunjucks'))
       .pipe(data(function () {
           return JSON.parse(fs.readFileSync('./app/data/test.json'));
       }))
       .pipe(nunjucksRender({
           path:['app/templates']
       }))
       .pipe(gulp.dest('app'))
       .pipe(browserSync.reload({
           stream: true
       }));
});

//----------------------------------
//----- BrowserSync
//----------------------------------
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app',
            browser: 'safari'
        }
    })
});

//----------------------------------
//----- Stylus - Voyager
//----------------------------------
gulp.task('voyager', function () {
    return gulp.src('app/stylus/voyager/style-master.styl')
        .pipe(customPlumber('Stylus Error in Voyager'))
        .pipe(sourcemaps.init())
        .pipe(stylus(
            {use: [jeet(), rupture()]}
        ))
        .pipe(autoprefixer())
        .pipe(stylint())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//----------------------------------
//----- Stylus - StyleDoc
//----------------------------------
gulp.task('styledoc', function () {
    return gulp.src('app/stylus/__styledoc/styledoc.styl')
        .pipe(customPlumber('Stylus Error in StyleDoc'))
        .pipe(sourcemaps.init())
        .pipe(stylus(
            {use: [jeet(), rupture()]}
        ))
        .pipe(autoprefixer())
        .pipe(stylint())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//----------------------------------
//----- Watch
//----------------------------------
gulp.task('watch', ['browserSync', 'stylus'], function () {
    gulp.watch('app/stylus/voyager/**/*.styl', ['voyager']);
    gulp.watch('app/stylus/__styledoc/**/*.styl', ['styledoc']);
    gulp.watch(
        [
        'app/templates/**/*',
        'app/pages/**/*.+(html|nunjucks)',
        'app/data/**/*.json'
        ],
        ['nunjucks']
    )
});

//----------------------------------
//----- Default
//----------------------------------
// gulp.task('default')

