function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1

        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject(`Número repetido!`)
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaCena(qtdeNumeros, tentativas) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 10) {
            throw "Não deu certo!"
        } else {
            gerarMegaCena(qtdeNumeros, tentativas + 1)
        }
        gerarMegaCena(qtdeNumeros, tentativas + 1)
    }
}

gerarMegaCena(8)
    .then(console.log)
    .catch(console.log)