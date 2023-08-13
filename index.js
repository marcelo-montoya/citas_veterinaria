const {registrar, leer} = require('./operaciones')

let argumentos = process.argv.slice(2);
const operacion = argumentos[0]

if(argumentos == ''){
    console.log('INGRESA INFORMACÓN DEL PACIENTE'.red.reset)
  }else{
      if (operacion === "registrar") {
          
          argumentos = argumentos.slice(1)
          let [nombre, edad, especie, color, enfermedad] = argumentos
          registrar(nombre, edad, especie, color, enfermedad);          
      
      } else if (operacion === "leer") {
          
        leer();
      
      }
}
