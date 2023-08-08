const fs = require('node:fs')

// Ejemplo asíncrono

console.log('Leyendo el primer archivo')
fs.readFile('clase_1/archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Problema al leer el archivo')
    process.exit(1)
  }
  console.log(text)
})

console.log('Leyendo el segundo archivo')
fs.readFile('clase_1/archivo_2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Problema al leer el archivo')
    process.exit(1)
  }
  console.log(text)
})

console.info('haciendo más cosas asíncronas...')
