function triangulos(l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        console.log('Equilátero')
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}
triangulos(113, 100, 11)