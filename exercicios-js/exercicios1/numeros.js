function formatarNumeros(valor) {
    const valorFormatado = () => valor.toFixed(2)
    
    return valorFormatado().toString().replace(".", ",")
}
console.log(formatarNumeros(0.3000000000004))

// * Formatando moeda com toLocaleStrig()
function formatar02(valor) {
    const formatarValor = () => valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return formatarValor()
}
console.log(formatar02(103759640))