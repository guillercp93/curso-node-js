const fs = require('node:fs/promises')

// Ejemplo asíncrono

console.log('Leyendo el primer archivo')
fs.readFile('clase_1/archivo.txt', 'utf-8')
    .then(text => console.log(text))
    .catch(err => console.error(err))

console.log('Leyendo el segundo archivo')
fs.readFile('clase_1/archivo_2.txt', 'utf-8')
    .then(text => console.log(text))
    .catch(err => console.error(err))

console.info("haciendo más cosas asíncronas...")

// Ejemplo síncrono en paralelo
Promise.all([
    fs.readFile('clase_1/archivo.txt', 'utf-8'),
    fs.readFile('clase_1/archivo_2.txt', 'utf-8')
]).then(([file1, file2]) => {
    console.info("---> file2:", file2)
    console.info("---> file1:", file1)
}).catch(err => console.error(err))
