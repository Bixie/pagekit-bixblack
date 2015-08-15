/**
 * Popular Tasks
 * -------------
 *
 * compile: compiles the .less files of the specified packages
 * lint: runs jshint on all .js files
 */

var merge = require('merge-stream'),
    gulp = require('gulp'),
    header = require('gulp-header'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint');

// paths of the packages for the compile-task
var pkgs = [
    {path: 'themes/bixblack/', data: 'composer.json'}
];

// banner for the css files
var banner = "/*! <%= data.title %> <%= data.version %> | (c) 2015 Pagekit/Bixie | MIT License */\n";

gulp.task('default', ['compile']);

/**
 * Compile all less files
 */
gulp.task('compile', function () {

    return merge.apply(null, gulp.src(['./less/style.less', './styles/*/style.less'], {base: './'})
        .pipe(less({compress: true, relativeUrls: true}))
        .pipe(header(banner, {data: require('./composer.json')}))
        .pipe(rename(function (file) {
            file.basename = 'theme.' + (file.dirname.indexOf('styles') === 0 ? file.dirname.replace('styles\\', '') : 'default');
            file.dirname = 'css';
            console.log(file.basename);
        }))
        .pipe(gulp.dest('./'))
        );

});

/**
 * Watch for changes in files
 */
gulp.task('watch', function () {
    gulp.watch('**/*.less', ['compile']);
});
