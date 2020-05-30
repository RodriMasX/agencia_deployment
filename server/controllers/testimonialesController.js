// Jalamos el modelo de testimoniales
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {

    //Mostramos los testimoniales de la base de datos.
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            // Como parametros del res.render le mandamos vista y segundo parametro un objeto con la variable del titulo y la segunda los datos extraidos de la base, esto solo estara disponible sobre ese template (al enviar "testimoniales", no lo hacemos en par "xx:xx" porque lleva el mismo nombre, se simplifica usando uno)
            pagina: 'Testimoniales',
            testimoniales
        })


}

exports.agregarTestimonial = async (req, res) => {

        //En este modulo se usara el bodyParser que se configura en el index.

        //Aplicando destructuring en base a los "name" de form.
        //req.body va a leer lo que tengamos en "name" del form.
        let {nombre,correo,mensaje} = req.body;
        
        //Validar que todos los campos esten llenos
        let errores = [];
        
        if(!nombre){
            errores.push({'mensaje' : 'Agrega tu nombre'});
        }

        if(!correo){
            errores.push({'mensaje' : 'Agrega tu correo'})
        }

        if (!mensaje) {
            errores.push({'mensaje' : 'Agrega tu mensaje'});
        }

        //Revisar por errores
        if (errores.length > 0) {
            //Muestra la vista con errores mandando llamar la vista de testimoniales, pasando las variables
            const testimoniales = await Testimonial.findAll()
            res.render('testimoniales', {
            //Le vamos a pasar por objeto el array de errores y tambien el nombre, correo y mensaje (recordando que como el propiedad:valor es el mismo entonces solo se usa uno y no el par) 
            //Esto sirve para que cuando un usuario envia el formulario con los datos mal, cuando se recarge no borre los datos que ya estaban puestos.
                errores,
                nombre,
                correo,
                mensaje,
                pagina: 'Testimoniales',
                testimoniales
            })

        } else {
            //Almacenarlo en la base de datos
            //.create returna un promise por lo que es necesario usar un then
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            //Con el then, va a recargar la misma página pero ahora va a mostrar el testimonial creado/insertado
            })
            res.redirect('/testimoniales')
        }
    }