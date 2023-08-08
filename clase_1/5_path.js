const path = require('node:path')

// Barra separadora de carpetas según SO
console.log(path.sep)

// UNIX -> /
// Windows -> \

// Unir rutas
const filePath = path.join('content', 'sub-folder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath) // nombre del archivo completo
const extension = path.extname(filePath) // extensión del archivo, incluyendo el punto

console.log(base, extension)
