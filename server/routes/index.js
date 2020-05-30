const express = require('express');
const router = express.Router();

/** CONTROLADORES **/

//Importando el controlador "nosotros"
const nosotrosController = require('../controllers/nosotrosController')
//Importando el controlador "home"
const homeController = require('../controllers/homeController')
//Importando el controlador "viajes"
const viajesController = require('../controllers/viajesController')
//Importando el controlador "testimoniales"
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function(){
    //Estableciendo las rutas
    router.get('/', homeController.consultasHomepage);

    //En /nosotros, mandamos llamar el controlador que importamos punto variable
    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    //Para leer los ids se pone ":id"
    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial)

    return router;
}
