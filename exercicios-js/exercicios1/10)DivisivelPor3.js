function divisivelPor3(inteiro) {
    if ((Number.isInteger(inteiro)) == true) {
        if (inteiro % 3 == 0 || inteiro == undefined) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log('Digite um número inteiro')
    }
}
divisivelPor3(0)