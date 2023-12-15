const {src, dest, watch, parallel, series} = require('gulp'); //Присвоение возможностей плагина('Gulp)

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean        = require('gulp-clean');


function styles() {
  return src('app/scss/style.scss')
    .pipe(autoprefixer({overrideBrowsersList: ['last 10 version']}))
    .pipe(concat('style.min.css'))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
} //Конвертация scss и переименование в style.min.css

function scripts() {
  return src([
    'node_modules', //Подключение доп фалойв (node_modules/swiper/swiper-bundle.js)
    'app/js/main.js'
    // 'app/js/*.js','!app/js/main.min,js' //Подключем все фалйы js в папке app кроме файла 
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/style.scss'], styles)
  watch(['app/js/main.js'], scripts)
  watch(['app/*.html']).on('change', browserSync.reload); 
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function building() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ], {base : 'app'})
  .pipe(dest('dist'))
}

function cleanDist() {
  return src('dist')
  .pipe(clean())
}


exports.styles      = styles; //styles кодовое слово для запуска функции
exports.scripts     = scripts;
exports.watching    = watching;
exports.browsersync = browsersync;

exports.build    = series(cleanDist, building);
exports.default  = parallel(styles, scripts, browsersync, watching);