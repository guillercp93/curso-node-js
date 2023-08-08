console.log('Hola, mundo 😸')
// Variable global para nodeJS (también en el navegador)
console.log(globalThis)

// CommonJS require module
const { sum } = require('./custom_sum.cjs')
console.log(sum(1, 2))

// Variable global que tiene información del proceso actual
console.log(process)

// obtener argumentos de entrada
console.log(process.argv)

// obtener el directorio donde se ejecuta el archivo
console.log(process.cwd())

// obtener variables de entorno
console.log(process.env)

// Controlar eventos del proceso
process.on('exit', () => {
  // TODO: Limpiar recursos
})

// controlar el proceso y su salida
process.exit(1)
