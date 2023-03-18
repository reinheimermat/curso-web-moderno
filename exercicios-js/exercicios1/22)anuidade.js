function anuidade(mes) {

    const jurosCompostos = (i) => (1200 * (1 + i) ** 1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    switch (mes) {
        case 1:
            console.log(`Janeiro: ${jurosCompostos(0)}`)
            break;
        case 2:
            console.log(`Fevereiro: ${jurosCompostos(0.5)}`)
            break;
        case 3:
            console.log(`Março: ${jurosCompostos(0.6)}`)
            break;
        case 4:
            console.log(`Abril: ${jurosCompostos(0.7)}`)
            break;
        case 5:
            console.log(`Maio: ${jurosCompostos(0.8)}`)
            break;
        case 6:
            console.log(`Junho: ${jurosCompostos(0.9)}`)
            break;
        case 7:
            console.log(`Julho: ${jurosCompostos(0.10)}`)
            break;
        case 8:
            console.log(`Agosto: ${jurosCompostos(0.11)}`)
            break;
        case 9:
            console.log(`Setembro ${jurosCompostos(0.12)}`)
            break;
        case 10:
            console.log(`Outubro: ${jurosCompostos(0.13)}`)
            break;
        case 11:
            console.log(`Novembro: ${jurosCompostos(0.14)}`)
            break;
        case 12:
            console.log(`Dezembro: ${jurosCompostos(0.15)}`)
            break
        default:
            console.error('Digite um número válido')
            break;
    }
}

anuidade(3)