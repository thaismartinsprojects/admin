var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    connect = require('gulp-connect');

var jsFiles = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular-ui-mask/dist/mask.min.js',
    'bower_components/moment/min/moment-with-locales.min.js',
    'bower_components/moment/locale/pt-br.js',
    'bower_components/angular-moment/angular-moment.min.js'
];

var cssFiles = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/fontawesome/css/font-awesome.min.css'
];

function logError(error) {
    console.error(error);
    this.emit('end');
}

gulp.task('styles', function() {
    gulp.src('public/sass/style.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', logError)
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

gulp.task('styles:dependencies', function() {
    gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('dependencies.min.css'))
        .on('error', logError)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function() {
    var appScripts = [
        'app/routes.js',
        'app/services/*.js',
        'app/filters/*.js',
        'app/directives/*.js',
        'app/controllers/*.js',
        'app/run.js'
    ];

    gulp.src(appScripts)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .on('error', logError)
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload());
});

gulp.task('scripts:dependencies', function() {
    gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('dependencies.js'))
        .pipe(uglify())
        .on('error', logError)
        .pipe(rename('dependencies.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('images', function() {
    gulp.src('public/images/*')
        .pipe(imagemin({ progressive: true }))
        .on('error', logError)
        .pipe(gulp.dest('public/images'));
});

gulp.task('fonts', function() {
    gulp.src('bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('copy-files', function() {
    gulp.src('public/images/*')
        .pipe(gulp.dest('dist/public/images'));
    gulp.src('public/js/*')
        .pipe(gulp.dest('dist/public/js'));
    gulp.src('public/css/*')
        .pipe(gulp.dest('dist/public/css'));
    gulp.src('public/fonts/*')
        .pipe(gulp.dest('dist/public/fonts'));
    gulp.src(['app/views/**/*'])
        .pipe(gulp.dest('dist/app/views'));
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    gulp.src('/app/views/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {

    connect.server({
        livereload: true
    });

    gulp.watch('app/views/**/*.html', ['scripts']);
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('public/sass/**/*.sass', ['styles']);
});

gulp.task('build', [
    'scripts',
    'scripts:dependencies',
    'styles',
    'styles:dependencies',
    'images',
    'fonts',
    'copy-files'
]);