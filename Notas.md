# Notas ✍️

## Variables globales

En nodeJS se tienen diferentes variables globales, pero la principal de donde vienen las diferentes variables y funciones que usamos como *console*, *fetch*, etc es **globalThis**.
**globalThis** es un objeto que está disponible tanto para nodeJS como en el navegador y tiene alias que lo referencia. En nodeJS es *global* y en el navegador es *window*.

Otra variable global que podemos usar para temas de la ejecución de nuestro código es **process**. Con esta variable podemos no sólo tener información del proceso de ejecución, sino también de los parámetros de entrada, variables de entorno, etc.

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

## NPM
Es el administrador de paquetes de Node. Este nombre está asociado a dos conceptos:

1. **Biblioteca de paquetes:** Sitio en la nube donde se almacenan todas las librerías que vas a utilizar en Node. Estas librerías están empaquetadas 📦.
2. **Utilidad para descargar paquetes:** Por defecto tienes la utilidad del mismo nombre. La usas en la **línea de comandos** y te sirve para descargar e instalar librerías de NPM. Otras utilidades que tiene el mismo fin son **yarn** y **pnpm** y puedes seguir descargando tus librerías desde NPM.

### Inicialización de un proyecto en Node.
El primer paso para empezar un proyecto en Node con sus dependencias es ejecutar el siguiente comando:
```sh
$ npm init
```
Al ejecutar este comando nos pedirá información del proyecto que vamos a construir:
- Nombre del proyecto.
- Descripción breve del proyecto.
- Versión del proyecto.
- Nombre del desarrollador(es).
- URL del repositorio en GIT.
- Palabras claves.
- Nombre del archivo de arranque del proyecto. Por ejemplo: *index.js*
- Licensia de desarrollo con la que se rige el proyecto.

Cuando completes esta información, nos creará un archivo llamado **package.json** con al información anterior entre otras cosas.

### Instalar dependencias
Para instalar dependencias se usa el comando:
```sh
$ npm install <nombre-dependencia>
```
Esto actualizará el archivo **package.json** donde agregará al listado de *dependencies*, el nombre del paquete que acabas de instalar.
En la versión de la librería aparece antes del número el este símbolo ^, el cuál nos dice que este proyecto usará la versión actual y las versiones con actualizaciones menores. Es decir, si el paquete instalado tiene la versión 1.0.0, cuando vuelvas a instalar las dependencias de ese proyecto, se buscarán versiones posteriores dentro de la versión 1, como la 1.0.2, 1.1.0, 1.2.1, etc.

Los paquetes o librerías instalados, se guardarán en la carpeta *node_modules*.

**Sugerencia 👇:** Se recomienda quitar el símbolo para evitar problemas de compatibilidad con versiones futuras y hacer el proceso de actualización manual.

### Tipos de dependencias
En el mundo de las dependencias de NodeJS se tienen dos tipos de dependencias:
- **Dependencias de producción:** Son aquellas librerías que necesita, sí o sí, nuestra aplicación para funcionar.
Estas quedan registradas en el archivo *package.json* en la sección de **dependencies**:
    ```json
    // ...
    "dependencies": {
        "picocolors": "1.0.0",
        // más dependencias...
    }
    ```
- **Dependencias de desarrollo:** Son aquellas librerías que no necesita la aplicación pero complementan o ayudan en el proceso de desarrollo de la misma.
Estas se instalan usando el comando
    ```sh
    $ npm install <nombre-librería> [-D] [--development]
    ```
    Estas librerías quedarían registradas en en archivo *package.json* en la sección **devDependencies**:
    ```json
    // ...
    "devDependencies": {
        "standard": "17.1.0",
        // más dependencias de desarrollo...
    }

## Estilos de codificación
Hay una estructura de o estilo de programación para JavaScript que es sin punto y coma, es denominado [Standard JS](https://standardjs.com/). Evalúa el código que codificas y te notifica de posibles errores. Se recomienda instalar como dependencia de desarrollo dentro del proyecto que estás trabajando.
```sh
$ npm install standard -D
```
Al tenerlo instalado, se debe configurar en el *package.json* la utilidad de *esLint*:
```json
"eslintConfig": {
    "extends": "standard"
}
```

### Configuración de VSCode para arreglar los problemas automáticamente:
1. Tener instalado la extensión de *ESLint*.
2. Habilitar el formateo cuando se guarda y la herramienta que ayuda al proceso de formatear. Ir al archivo **settings.json**
    ```json
    // ...
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint",
        "editor.formatOnSave": true
    },
    // ...
    ```
3. En el mismo archivo, habilitar la opción de arreglar los problemas de eslint al guardar:
    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
    ```
