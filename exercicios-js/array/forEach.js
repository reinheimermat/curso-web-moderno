const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1} ${nome}`)
})

const exibirAprovados1 = (aprovado, indice) => console.log(indice + 1, aprovado)
aprovados.forEach(exibirAprovados1)