function calcularPlano(salario, plano) {
    switch (plano) {
        case 'A':
            console.log((salario * 0.10 + salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 'B':
            console.log((salario * 0.15 + salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 'C':
            console.log((salario * 0.20 + salario).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        default:
            console.log('Plano Inválido')
            break;
    }
}
calcularPlano(1200, 'A')