var Cervezas = require("../models/cervezas")
module.exports = {
    search: function (req, res) {
        var q = req.query.q
        Cervezas.search(q, function (err, cervezas) {
            if (err) {
                return res.status(500).json({
                    message: "Error en la búsqueda",
                })
            }
            return res.json(cervezas)
        })
    },

    list: function (req, res) {
        Cervezas.find(function (err, cervezas) {
            if (err) {
                return res.status(500).json({
                    message: "Error obteniendo la cerveza",
                })
            }
            return res.json(cervezas)
        })
    },

    show: function (req, res) {
        var id = req.params.id
        Cervezas.findOne({ _id: id }, function (err, cerveza) {
            if (err) {
                return res.status(500).json({
                    message: "Se ha producido un error al obtener la cerveza",
                })
            }
            if (!cerveza) {
                return res.status(404).json({
                    message: "No tenemos esta cerveza",
                })
            }
            return res.json(cerveza)
        })
    },

    create: function (req, res) {
        var cerveza = req.body
        Cervezas.save(cerveza, function (err, cerveza) {
            if (err) {
                return res.status(500).json({
                    message: "Error al guardar la cerveza",
                    error: err,
                })
            }
            return res.status(201).json({
                message: "saved",
                _id: cerveza._id,
            })
        })
    },

    update: function (req, res) {
        var id = req.params.id
        let cerveza = {}
        cerveza._id = parseInt(id)
        cerveza.nombre = req.body.nombre
        cerveza.descripcion = req.body.descripcion
        cerveza.graduacion = req.body.graduacion
        cerveza.envase = req.body.envase
        cerveza.precio = req.body.precio
        Cervezas.update(id, cerveza, function (err, cerveza) {
            if (err) {
                return res.status(500).json({
                    message: "Error al guardar la cerveza",
                })
            }

            if (!cerveza) {
                return res.status(404).json({
                    message: "No hemos encontrado la cerveza",
                })
            }
            return res.json(cerveza)
        })
    },


    remove: function (req, res) {
        var id = req.params.id
        Cervezas.findByIdAndRemove(id, function (err, cerveza) {
            if (err) {
                return res.json(500, {
                    message: "No hemos encontrado la cerveza",
                })
            }
            return res.json(cerveza)
        })
    },
}
