const http = require('node:http')
const { findAvailablePort } = require('./8_free_port')

const port = process.env.PORT ?? 3000

const server = http.createServer((request, response) => {
  response.end('Hola Mundo')
})

// Se usa la función que se creó para obtener un puerto disponible
findAvailablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`El servidor está escuchando y puedes ingresar a http://localhost:${server.address().port}`)
  })
}).catch(err => console.error('No se logró levantar el servidor', err))
