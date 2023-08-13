const fs = require('fs')
const colors = require('colors')

const jsonCitas = './citas.json'

const registrar = (nombre, edad, especie, color, enfermedad) => {
    const cita = {
        nombre: nombre,
        edad: edad,
        especie: especie,
        color: color,
        enfermedad: enfermedad,
    }
    
    let citas = fs.readFileSync(jsonCitas, 'utf-8')
    citas = JSON.parse(citas)
    citas.push(cita)
    fs.writeFileSync(jsonCitas, JSON.stringify(citas))

}

const leer = () => {
    let citas = fs.readFileSync(jsonCitas, 'utf-8')
        JSON.parse(citas).forEach(cita => {
        let render =       
        `
        ${'Nombre'.green}: ${cita.nombre},
        ${'Edad'.green}: ${cita.edad},
        ${'Especie'.green}: ${cita.especie},
        ${'Color'.green}: ${cita.color},
        ${'Enfermedad'.green}: ${cita.enfermedad},
    `
    console.log(render);
      });
}

module.exports = {
    registrar,
    leer,
}