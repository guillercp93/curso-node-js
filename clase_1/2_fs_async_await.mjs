import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo')
const text = await readFile('clase_1/archivo.txt', 'utf-8')
console.log(text)

console.log('Leyendo el segundo archivo')
const secondText = await readFile('clase_1/archivo_2.txt', 'utf-8')
console.log(secondText)

console.log('Haciendo otras cosas...')
