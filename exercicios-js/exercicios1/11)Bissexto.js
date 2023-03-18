function calcularAnoBissexto(ano) {
    if (ano == undefined || ano == 0) {
        console.log(false)
    } else if (ano % 400 == 0) {
        console.log(true)
    } else if (ano % 100 == 0) {
        console.log(false)
    } else if (ano % 4 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
calcularAnoBissexto(2003)