const Sequelize = require('sequelize');
//Importar la conexión (que tenemos en el index.)
const db = require('../config/database');
//Definir el modelo
//Mapear los campos tal cual vienen en la tabla de mysql
const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }

})

//Exportar la variable creada.
module.exports = Testimonial;