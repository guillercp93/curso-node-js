const net = require('node:net')

function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    // Se crea un servidor que intenta escuchar por el puerto deseado
    const server = net.createServer()
    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => resolve(port))
    })
    // en caso de que el puerto esté ocupado o exista otro error
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Si el puerto deseado está ocupado, se usa 0, porque con el puerto vacío
        // obtendrá el siguiente puerto libre
        console.warn(`El puerto ${desirePort} está ocupado. Buscando otro...`)
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = {
  findAvailablePort
}
