console.log(module.exports) // Retorna um objeto vazio { }
console.log(module.exports === this) // Retorna true
console.log(module.exports === exports) // Retorna true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Test'
}

// Criando um novo objeto
console.log(module.exports)
module.exports = {publico: true}