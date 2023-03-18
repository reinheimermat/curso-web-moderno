function calcularPlano(conveniado) {
    if (conveniado < 10) {
        console.log(`O valor a ser pago é de R$ ${180}`)
    } else if (conveniado > 10 && conveniado <= 30) {
        console.log(`O valor a ser pago é de R$ ${150}` )
    } else if (conveniado > 30 && conveniado <= 60) {
        console.log(`O valor a ser pago é de R$ ${195}`)
    } else if (conveniado > 60) {
        console.log(`O valor a ser pago é de R$ ${130}`)
    }
}
calcularPlano(40)