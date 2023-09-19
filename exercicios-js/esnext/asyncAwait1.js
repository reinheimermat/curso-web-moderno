function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, tempo)
    })
}

async function executar() {
    await esperarPor(2000)
    console.log('async/await 1...')
    await esperarPor(2000)
    console.log('async/await 2...')
    await esperarPor(2000)
    console.log('async/await 3...')
}

executar()

