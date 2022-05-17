// const usoPrueba = require('./prueba')
const info = require('./cesareF')

function mostrarInfo(info) {
    return  `Hola, soy ${info[0]}, disfruto de ${info[1]}, soy de ${info[2]}`;
}
console.log(mostrarInfo(info));

let frase = 'Breaking Bad Rules';

console.log(frase.slice(-12)); 