function calculadora(n1, operador, n2) {
    switch (operador) {
        case '+':
            console.log(n1 + n2)
            break;
        case '-':
            console.log(n1 - n2)
            break;
        case 'x':
            console.log(n1 * n2)
            break;
        case '/':
            console.log(n1 / n2)
            break;
        default:
            console.log('Operação Inválida')
            break;
    }
}
calculadora(10, '-', 10)