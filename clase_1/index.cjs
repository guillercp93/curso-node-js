console.log('Hola, mundo 😸')
// Variable global para nodeJS (también en el navegador)
console.log(globalThis)

// CommonJS require module
const { sum } = require('./custom_sum.cjs')
console.log(sum(1, 2))
