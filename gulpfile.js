const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

// Compile sass into CSS & auto-inject into browsers | компилятор sass в css
function serveSass() {
    return src("./sass/**/*.sass", "./scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({cascade: false}))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

// Static server | сервер для авто обновления страницы
function bs() {
    serveSass();
     browserSync.init({
      server: {
          baseDir: "./"
      }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./scss/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

//Подготовка пронкта к выгрузке (сжатие, минимификация...)
//CSS
function buildCSS(done) {
    src('css/**/**.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
    done();
};
//JS
function buildJS(done) {
    src(['js/**/**.js', '!js/**/**.min.js'])
        .pipe(minify({
            ext:{
                min:'.js'
            }
        }))
        .pipe(dest('dist/js/'));
    src('js/**/**.min.js')
        .pipe(dest('dist/js/'));
    done();
};

function buildHTML(done) {
    src('**.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist/'));
    done();
};

function php(done) {
    src('**.php')
        .pipe(dest('dist/'));
    src('phpmailer/**/**')
        .pipe(dest('dist/phpmailer/'));
    done();
};

function fonts(done) {
    src('css/fonts/**/**')
        .pipe(dest('dist/css/fonts'));
    done();
};

function imageMin(done) {
    src('img/**/**')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
    done();
};

exports.bs = bs;
exports.build = series(buildCSS, buildJS, buildHTML, php, fonts, imageMin);

