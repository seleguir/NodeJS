const os = require('node:os')

console.log('Memoria libre inicial: ' + os.freemem())
let vector=[]
for (let x = 0; x < 1000000; x++) {
  vector.push(x)
}
console.log('Memoria libre luego de la creación del vector: ' + os.freemem())