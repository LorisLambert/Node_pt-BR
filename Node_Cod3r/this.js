// Fora de função
console.log(this === global) // false
console.log(this === module) // false
console.log(this === module.exports) // true
console.log(this === exports) // true

// Dentro de uma função
function loThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) //falso
    console.log(this === global) // true
}
logThis()