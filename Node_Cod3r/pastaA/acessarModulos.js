// Modulos da aplicação
const ModuloA = require('../ModuloA') // caminho relativo
console.log(ModuloA.hello)
const ModuloA = require('C:\Users\lohan\Documents\GITHUB\Node_pt-BR\Node_Cod3r\ModuloA.js') // caminho absoluto
console.log(ModuloA.wellcome)

// Modulos core
const compliments = require('compliments')
console.log(compliments.hello)

// Modulo core HTTP
const http = require('http')
http.createServer((req, res) => {
    res.writable('Good Morning!')
    res.end()
}).listen(8080)

// Padrão index
const c = required('./pastaB') // (./pastaB) = (./pastaB/index.js)
console.log(c.bye)