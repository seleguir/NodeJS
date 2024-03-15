const fs = require('node:fs/promises')

// Otra función para leer un directorio/carpeta 
async function leerDirectorio() {
  const archivos = await fs.readdir("./")
  for (let archivo of archivos) {
    console.log(archivo)
  }
}

leerDirectorio()