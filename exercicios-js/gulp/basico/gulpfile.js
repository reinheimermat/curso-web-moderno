const gulp = require('gulp')
const series = gulp.series

const tarefa1 = (cb) => {
    console.log('Tarefa 1')
    return cb()
}

const tarefa2 = (cb) => {
    console.log('Tarefa 2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB')) // transformações -> .pipe()
    return cb()
}

const fim = (cb) => {
    console.log('fim')
    return cb()
}

module.exports.default = series(
    tarefa1,
    tarefa2,
    copiar,
    fim,
)
