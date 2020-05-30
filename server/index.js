// ++ Crear servidor en Express ++

//Importar Express
const express = require('express');
//Importar para trabajar con el file system
const path = require('path')
//Importar body parser para parsear los datos del formulario
const bodyParser = require('body-parser')
//Importar rutas
const routes = require('./routes')

//Cargamos configuraciones personalizadas
//Como el archivo es index.js, no tenemos que especificarle el nombre del archivo.
const configs = require('./config')

//Importar el ORM de la base de datos
const db = require('./config/database');

//Importamos dependencia "dotenv" y le pasamos configuracion, este no requiere que se asigne a una variable
require('dotenv').config({
    //Establecemos el archivo que creamos
    path: 'variables.env'
})


//Verificar conexión
/*
db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
*/

//Configurar Express
const app = express();
//Habilitar PUG
app.set('view engine', 'pug');
//Indicar donde estan los templates
app.set('views',path.join(__dirname, './views'));
//Cargar una carpeta estática llamada "public"
app.use(express.static('public'))

//Validar si estamos en desarrollo o producción
//env es una variable que existe en node para detectar el ambiente en el que estamos
const config = configs[app.get('env')]

//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual y obtiene la ruta
app.use((req, res, next) => {
    //Crear una nueva fecha
    const fecha = new Date();
    //La forma de usar esta fecha y pasarlo hacia el template,es usando "locals", son variables locales, mismo que express identifica y la pasa a traves de los archivos (res.locals.[nuevaVariable] = [variableOriginal])
    res.locals.fechaActual = fecha.getFullYear();
    //req.path nos va a retornar lo que tengamos despues de diagonal en la url, es decir /testimoniales, /viajes...
    res.locals.ruta = req.path;
    console.log(res.locals);
    
    //return next para que siga ejecutando la próxima instruccion
    return next();

})

//ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/',routes());


/** Puerto y Host para la app **/

//En caso de que no exista process.env.HOST, le vamos a asignar el puerto 0.0.0.0 , no es válida, pero HEROKU la va a detectar como invalida y le va a asignar una; lo mismo para el puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

//Estableciendo el puerto
app.listen(port,host, () => {
    console.log('El servidor esta funcionando');
});


/*
app.use = responde a todos los verbos de http
app.get = responde al verbo get
*/