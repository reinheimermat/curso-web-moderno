function jurosSimples(c, i, t) {
    const simples = c * i * t
    const montante = (c + simples).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    console.log(`O montante a ser resgatado é de ${montante}`)
}
jurosSimples(1200, 0.02, 14)

function jurosCompostos(c, i, t) {
    const montante = (c * (1 + i) ** t).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    console.log(`O montante gerado em juros compostos é de ${montante}`)
}
jurosCompostos(620, 0.015, 24)

