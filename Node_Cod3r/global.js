// console.log(global)
globalThis.MinhaApp1 = {
    saudacao() {
        return 'Isso é um teste!!!'
    },
    nome: 'Objeto'
}

// Objeto congelado, portanto, não pode ser alterado
globalThis.MinhaApp2 = Object.freeze({
    saudacao() {
        return 'Tá frio!!!'
    },
    nome: 'Objeto congelado'
})