function taxaAnual(crianca1, crianca2, taxa1, taxa2) {
    if (crianca1 == crianca2) {
        if (taxa1 > taxa2) {
            return('A criança 1 alcançara a criança 2 em 1 ano')
        } else if (taxa1 < taxa2){
            console.log('A criança 2 alcançara a criança 1 em 1 ano')
        } else {
            console.log('As duas crianças tem a mesma altura e crescimento')
        }
    } else {
        if (crianca1 > crianca2) {
            if (taxa1 >= taxa2) {
                return(`A criança menor não ultrapassará a criança maior`)
            } else {
                return(`A criança menor ultrapassará a criança maior em ${calcularTempo(crianca1, crianca2, taxa1, taxa2)}`)
            }
        } else {
            if (taxa2 >= taxa1) {
                return(`A criança menor não ultrapassará a criança maior`)
            } else {
                return(`A criança menor ultrapassará a criança maior em ${calcularTempo(crianca1, crianca2, taxa1, taxa2)}`)
            }
        }
    }
}

function calcularTempo(criancaMaior, criancaMenor, taxaMaior, taxaMenor) {
    let qtdAnos = 0
    while (criancaMenor < criancaMaior) {
        criancaMenor += taxaMenor
        criancaMaior += taxaMaior
        qtdAnos++
    }
    return qtdAnos
}
console.log(taxaAnual(150, 2, 130, 4))
