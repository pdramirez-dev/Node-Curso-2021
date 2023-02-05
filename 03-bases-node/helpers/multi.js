const fs = require('fs')

const crearArchivo = async (base = 5, listar) => {
    try {
        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }


        if (listar) {
            console.log('===================');
            console.log('Tabla del: ', base);
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        console.log(`Tabla ${base} Creada`);

    } catch (err) {
        throw err;

    }



}

module.exports = {
    crearArchivo
}