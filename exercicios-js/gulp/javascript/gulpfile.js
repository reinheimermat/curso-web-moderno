const gulp = require('gulp')
const series = gulp.series
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // converter o cod pra minificação
        .on('error', (err) => console.log(err)) // podemos tratar erros
        .pipe(concat('codigo.min.js')) // concatena o arquivo final
        .pipe(gulp.dest('build')) // pasta de destino

        return cb()
}

exports.default = series(padrao)