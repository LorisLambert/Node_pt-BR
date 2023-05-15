require('./global')

// Tentar mudar o objeto não congelado e verificando que dá
console.log(MinhaApp1.saudacao())
MinhaApp2.nome = 'Objeto quente'
console.log(MinhaApp2. saudacao)

// Tentar mudar o objeto congelado e verificando que não dá
console.log(MinhaApp2.saudacao())
MinhaApp2.nome = 'Objeto quente'
console.log(MinhaApp2. saudacao)