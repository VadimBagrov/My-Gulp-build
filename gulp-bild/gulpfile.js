//Присваиваем возможности галпа (если в {} то несколько)
const {src, dest, watch, parallel, series} = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat'); 
const uglify       = require('gulp-uglify-es').default; 
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean        = require('gulp-clean');


function styles() {
    return src('app/scss/style.scss') //нашли файлы scss
        .pipe(autoprefixer({ overrideBrowserlist:['last 10 version'] }))
        .pipe(concat('style.min.css')) //выкинули в папку сss
        .pipe(scss({outputStyle: 'compressed'})) //сжатый формат
        .pipe(dest('app/css'))
        .pipe(browserSync.stream()); //слежение и обновленив CSS
} //Конкатенация и переименование

function scripts() {
    return src('app/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream()); //слежение и обновленив JS
} //Конкатенация и переименование для JS 

//function scripts() {
    // return src([
    //     'node_modules/swiper-bundle.js', 
    //     'app/js/main.js',
    //     'app/js/*.js', // соединеню всех файлов js  в один
    //     '!app/js/main.min.js' Все файлы в папке js,кроме мин файлов
    // ]) //Если файлов требующих  js много то 
    // подключаем к пример swiper(обычную версию) через запятую
//} //Конкатенация и переименование для JS 

function watching() {
    watch(['app/scss/style.scss'], styles) //В [] файл за которым следим
    watch(['app/js/main.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload) //слежение и обновленив HTML
} //Если будут изменения то обновит все таски

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
} //Лайв сервер

function cleanDist () {
    return src('dist')
    .pipe(clean())
} //Перед обновлением сборки будет очищать dist

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/**/*.html'
    ],{base: 'app'})
        .pipe(dest('dist'))
} //Сборка проэкта

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
// Имена для запуска в консоли

exports.build = series(cleanDist, building);
// Series - это последовательное выполнение тасков
// Parallel - одновременно
exports.default = parallel(styles, scripts, browsersync, watching); 
// Чтобы запускалось несколько тасков