//Para exportar multiples porciones y no tener que importar todo el archivo, se usa la sintaxis de exports.
//exports.[nombreDelControlador]
exports.infoNosotros = (req, res) => {
    // Como segundo parametro de res.render le mandamos opciones, en este caso una variable que solo estara disponible sobre ese template
    res.render('nosotros', {
        pagina: 'Sobre nosotros'
    })
}