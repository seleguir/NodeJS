const fs = require('node:fs/promises') 

// Código para mostrar todos los archivos de una carpeta 

fs.readdir('./')
  .then(archivos => {
    for (let archivo of archivos) {
      console.log(archivo)
    }
  })
  .catch(error => {
    console.log(error)
  })