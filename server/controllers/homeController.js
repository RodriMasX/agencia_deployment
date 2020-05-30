//importar base de datos
//const Viaje porque debe ser igual al nombre como lo exportamos en el modelo
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


//Para exportar multiples porciones y no tener que importar todo el archivo, se usa la sintaxis de exports.
//exports.[nombreDelControlador]
exports.consultasHomepage = async (req, res) => {
    //Cuando se trabaja con modelos y sequelize, siempre retornaran un promise, por lo que se usa asi:

    const viajes = await Viaje.findAll({
        limit: 3
    });

    const testimoniales = await Testimonial.findAll({
        limit: 3
    })

    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        //Cuando se tienen propiedad y valor con el mismo nombre se aplica Object Literal Enhacement, por lo que se puede pasar solo uno y se pasaran los dos., es decir de "viajes:viajes", se puede pasar solo "viajes"           
        //Aqui se usa resultado en su posición 0, ya que es el primer promise que se agrego 
        viajes,
        testimoniales
    })



}