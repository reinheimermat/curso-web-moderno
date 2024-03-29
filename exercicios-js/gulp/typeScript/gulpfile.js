const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
    .pipe(tsProject()) // compilação
    .pipe(gulp.dest('build')) // pasta
}

exports.default = series(transformacaoTS)