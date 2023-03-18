function cardapio(cod, qtd) {
    switch (cod) {
        case 100:
            console.log((qtd * 3.00).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 200:
            console.log((qtd * 4.00).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 300:
            console.log((qtd * 5.50).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 400:
            console.log((qtd * 7.50).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 500:
            console.log((qtd * 3.50).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        case 600:
            console.log((qtd * 2.80).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            break;
        default:
            break;
    }
}
cardapio(100, 2)