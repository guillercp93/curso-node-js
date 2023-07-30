# Notas ✍️

## Variables globales

En nodeJS se tienen diferentes variables globales, pero la principal de donde vienen las diferentes variables y funciones que usamos como *console*, *fetch*, etc es **globalThis**.
**globalThis** es un objeto que está disponible tanto para nodeJS como en el navegador y tiene alias que lo referencia. En nodeJS es *global* y en el navegador es *window*.

## Exportar e importar módulos
En nodeJS existen dos formas de exportar e importar tus módulos. La versión de CommonJS y la de EmacScript.
### CommonJS
La manera de exportar con CommonJS es llamar a la variable global module y la propiedad export
```js
module.exports = { myFunction }
module.exports = myModule
```
Tu puedes exportar un objeto entero que sería tu módulo o diferentes partes o funciones que están en el fichero como un objeto. La forma en que lo haces tiene diferentes connotaciones a la hora de importar.
```js
const { myFunction } = require('myModule.js')
const myM = require('myModule.js')
```
Como puede ver, en el primero tenermos que hace una desconstrucción para obtener la función que necesitas, pero tienes que usar la llave específica. Por otro lado, si quieres obtener todo el objeto que exportaste, puedes asignar el módulo a una variable y no es necesario que se llama igual.

**Importante❗**: Los archivos con formato *.js* por defecto usa CommonJS ó si quieres forzar a que se utilice este sistema usa el formato *.cjs*

### EmacScript (ES Modules)
Este sistema es más moderna y estándar para Javascript. Para exportar con este sistema usamos:
```js
export function myFunction() {}
export default sum
```
Similar al caso de CommonJS, tenermos dos formas de importar y las extensiones son obligatorias según la especificación ES.
```js
import {myFunction} from 'myModule.mjs'
import MyM from 'myModule.mjs'
```
**Importante❗**: Para utilizar este sistema se debe usar el formato *.cjs*

## Importar módulos nativos
Para importar los módulos nativos de nodeJS, no es recomendable usar el nombre del módulo sino agregar el prefivo **node:**.
Por ejemplo:
```js
const os = require('node:os')
```
**Importante❗**: Esto es requerido a partir de la versión **16** de NodeJS.

## Convertir funcionalidades asíncronas con callback a promesas
Hay ocasiones en que los módulos ya sea de node u otra librería usa la estructuras de callbacks. Pero si queremos resolver la funcionalidad asíncrona como promesa usaremos la utilidad de *promisify* que nos da NodeJS.
```js
const fs = require('node:fs')
const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)
// Más código a continuación...
```
Para este caso de redFile, ya existe su versión con promesas. La manera de usarlo es importar el módulo de filesystem de la siguiente forma:
```js
const fs = require('node:fs/promises')
// Más código a continuación...
```
Así no se tiene que usar *promisify* para usar la funcionalidad como promesa.

### Usar las funciones Async - Await en el sistema de CommonJS
En commo JS no puedes usar libremente en el cuerpo del script el *await* como si podrías en el sistema ES Modules. Para ello, usualmente los desarrolladores usan una **IIFE** (Funciones autoinvocadas). Se encapsula la función anónima asíncrona en paréntesis y esto se invoca. La función tiene que usar la palabra *async* delante del nombre.
Un dato importante es que hay que usar el punto y coma (;) en los requirements o import ya que este no es capaz de diferenciar una instrucción de la otra.
```js
const myM = require('myModule'); // <--- Aquí usar el punto y coma porque viene un paréntesis

(
    async () => {
        const result = await myM.myPromise("p1")
        // Más código...
    }
)() // <-- se ejecuta la función encapsulada
```
