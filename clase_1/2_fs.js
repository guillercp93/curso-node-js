const fs = require('node:fs')

// Ejemplo síncrono
const stats = fs.statSync('clase_1/archivo.txt')

console.log(
  stats.isFile(), // Verificar si es archivo
  stats.isDirectory(), // Verificar si es directorio
  stats.isSymbolicLink(), // Verificar si es un acceso directo
  stats.size // tamaño de bytes
)

// Leer un archivo
console.log('Leyendo el primer archivo')
// eslint-disable-next-line no-undef
const text = fs.readFileSync('clase_1/archivo.txt', encoding = 'utf-8')
console.log(text)
console.log('Leyendo el segundo archivo')
// eslint-disable-next-line no-undef
const secondtext = fs.readFileSync('clase_1/archivo_2.txt', encoding = 'utf-8')
console.log(secondtext)
console.info('haciendo más cosas síncronas...')
console.info('---------------------------------------------------------------------------')
