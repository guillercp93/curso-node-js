const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre O.S:', os.platform())
console.log('Versión O.S:', os.release())
console.log('Arquitectura O.S:', os.arch())
console.log('Número de CPUs:', os.cpus().length) // <------ vamos a poder escalar procesos en Node
console.log('Memoria libre (MB):', os.freemem() / 1024 / 1024)
console.log('Memoria total (MB):', os.totalmem() / 1024 / 1024)
console.log('tiempo de encendido del ordenador (h)', os.uptime() / 60 / 60)
