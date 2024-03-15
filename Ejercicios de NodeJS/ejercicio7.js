const http = require('node:http') // Módulo http para implementar apps en un servidor web

const servidor = http.createServer((pedido, respuesta) => { // Función para crear un servidor implementando el protocolo HTTP 
  respuesta.writeHead(200, { 'Content-Type': 'text/html' })
  respuesta.write(`<!doctype html><html><head></head>
                   <body><h1>Sitio en desarrollo</h1></body></html>`)
  respuesta.end()
})

servidor.listen(8888) // Función que espera peticiones, en este caso en el puerto 8888

console.log('Servidor web iniciado')