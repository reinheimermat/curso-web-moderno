function calcularSalario(qtdeHoras, valorPorHora) {
    const salario = qtdeHoras * valorPorHora
    return `Sálario igual a ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
}

console.log(calcularSalario(150, 40.5))