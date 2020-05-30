const Sequelize = require('sequelize');
//Importar la conexión (que tenemos en el index.)
const db = require('../config/database');
//Definir el modelo
//Mapear los campos tal cual vienen en la tabla de mysql
const Viaje = db.define('viaje',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    }
});

module.exports = Viaje;