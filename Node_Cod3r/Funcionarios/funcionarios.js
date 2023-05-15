const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func1, funcAtual1) => {
    return func1.salario < funcAtual1.salario ? func1 : funcAtual1
}
const maiorSalario = (func2, funcAtual2) => {
    return func2.salario > funcAtual2.salario ? func2 : funcAtual2
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // Mulher chinesa com menor salario?
    const func1 = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func1)

    // Mulher chinesa com maior salario?
    const func2 = funcionarios.filter(chineses).filter(mulheres).reduce(maiorSalario)
    console.log(func2)
})