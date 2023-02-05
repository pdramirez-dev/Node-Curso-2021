
const { crearArchivo } = require('./helpers/multi')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default:false 
    
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero '
        }
        return true;
    })
    .argv; // libreria para linea de comandos en node 

console.clear();

/*const [, , arg3 = 'base=5'] = process.argv;
const [, base=5] = arg3.split('=');
*/


crearArchivo(argv.b,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err => console.log(err));

