function adicionarVetor(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('resultado: ' + vetorInicial)
}

adicionarVetor([1, 2, 3], [4, 5, 6])