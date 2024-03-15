function esNombreElegante(nombre) {
    return nombre.startsWith('a') && nombre.endsWith('a');
}

function evaluarNombres(nombres) {
    return nombres.map(nombre => esNombreElegante(nombre));
}

// Ejemplo de uso
const nombres = ['ana', 'juan', 'amanda', 'luisa']; // true, false, true, false
console.log(evaluarNombres(nombres)); 