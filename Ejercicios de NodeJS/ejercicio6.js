const fs = require('node:fs')

fs.readFile('./archivo1.txt', (error, datos) => { //  Puede implementarse una función con un nombre explícito -> function leer(error, datos) {
  if (error)
    console.log(error)
  else
    console.log(datos.toString())
})

// fs.readFile('./archivo1.txt', leer)

console.log('última línea del programa')
