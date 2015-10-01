/**
 * Popular Tasks
 * -------------
 *
 * compile: compiles the .less files of the specified packages
 * lint: runs jshint on all .js files
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    _ = require('lodash'),
    ftp = require('vinyl-ftp'),
    header = require('gulp-header'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint');

// paths of the packages for the compile-task
var config = {
    pkg: {
        name: 'bixie/bixblack',
        path: 'packages/bixie/bixblack',
        data: 'composer.json'
    },
    ftp: {
        host:     'localhost',
        user:     'root',
        password: '',
        root:     'var/www',
        parallel: 5,
        log:      gutil.log
    }
};

// banner for the css files
var banner = "/*! <%= data.title %> <%= data.version %> | (c) 2015 Pagekit/Bixie | MIT License */\n";

gulp.task('default', ['compile']);

gulp.task('compile', function () {

    return gulp.src(['./less/style.less', './styles/*/style.less'], {base: './'})
        .pipe(less({compress: true, relativeUrls: true}))
        .pipe(header(banner, {data: require('./composer.json')}))
        .pipe(rename(function (file) {
            file.basename = 'theme.' + (file.dirname.indexOf('styles') === 0 ? file.dirname.replace('styles\\', '') : 'default');
            file.dirname = 'css';
            gutil.log('Compiling', gutil.colors.magenta(file.basename));
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('deploy', ['compile'], function () {

    var conn = ftp.create(_.extend(config.ftp, require('./remote.json'))),
        globs = [
            'css/**',
            'app/bundle/**'
        ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src(globs, { base: '.', buffer: false })
        .pipe(conn.newer(config.pkg.path)) // only upload newer files
        .pipe(conn.dest(config.ftp.root + '/' + config.pkg.path));

});

gulp.task('watch', function () {
    gulp.watch('**/*.less', ['compile']);
});

gulp.task('watchDeploy', function () {
    gulp.watch('**/*.less', ['deploy']);
});
