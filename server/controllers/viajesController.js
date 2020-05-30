//Como interactua con el modelo entonces se importa la base de datos
//const Viaje porque debe ser igual al nombre como lo exportamos en el modelo
const Viaje = require('../models/Viajes');
// Jalamos el modelo de testimoniales
const Testimonial = require('../models/Testimoniales');

//Para exportar multiples porciones y no tener que importar todo el archivo, se usa la sintaxis de exports.
//exports.[nombreDelControlador]

exports.mostrarViajes =  async (req, res) => {
    //Cuando se trabaja con modelos y sequelize, siempre retornaran un promise, por lo que se usa asi:
    const viajes = await Viaje.findAll()
    res.render('viajes', {
            pagina: 'Próximos Viajes',
            //Cuando se tienen propiedad y valor con el mismo nombre se aplica Object Literal Enhacement, por lo que se puede pasar solo uno y se pasaran los dos., es decir de "viajes:viajes", se puede pasar solo "viajes"            
            viajes: viajes
        });

}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
    //Mostar el id
    //res.send(req.params.id)

}