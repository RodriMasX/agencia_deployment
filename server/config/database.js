//Importamos sequelize
const Sequelize = require('sequelize');
//Importamos dependencia "dotenv" y le pasamos configuracion, este no requiere que se asigne a una variable
require('dotenv').config({
    //Establecemos el archivo que creamos
    path: 'variables.env'
})

//module.exports para poder utilizarlo en los demas archivos
//En la parte de Sequlize: la dependencia "dotenv" tiene una forma "process.env.[nombreDeVariable]", (el nombre de la variable es como lo tenemos en el archivo "variables.env")
//El constructor de Sequelize recibe: nombre de la base de datos, usuario, password
module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});