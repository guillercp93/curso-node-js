const { readFile } = require('node:fs/promises');

// Como en CommonJS no tiene soporte para realizar acciones con await directamente en el cuerpo,
// se usará una Inmediatly Invoked Function Expression (IIFE)
(
  async () => {
    console.log('Leyendo el primer archivo')
    const text = await readFile('clase_1/archivo.txt', 'utf-8')
    console.log(text)

    console.log('Leyendo el segundo archivo')
    const secondText = await readFile('clase_1/archivo_2.txt', 'utf-8')
    console.log(secondText)

    console.log('Haciendo otras cosas...')
  }
)()
