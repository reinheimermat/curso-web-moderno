function formulaBhaskara(ax2, bx, c) {
    const delta = bx * bx - 4 * ax2 * c
    const v1 = [-bx + Math.sqrt(delta) / (2 * ax2)]
    const v2 = [-bx - Math.sqrt(delta) / (2 * ax2)]

    if (ax2 == 0) {
        console.log('O valor de "a", deve ser diferente de 0 ')
    } else if (delta < 0) {
        console.log('Delta negativo')
    } else {
        console.log(`${v1}, ${v2}`)
    }
}
formulaBhaskara(3, 7, 3)
