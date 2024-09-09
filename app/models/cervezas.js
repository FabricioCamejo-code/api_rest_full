const cervezas = [
    {
        _id: 1, nombre: 'Porter', descripcion: 'menos oscuras y potentes', graduacion: 87, envase:
            '500cc', precio: 123
    },
    {
        _id: 2, nombre: 'Belga', descripcion: 'pálidas y las oscuras', graduacion: 89, envase: '330cc',
        precio: 456
    },
]


module.exports = {
    search(q, cb) {
        let cervezs = cervezas.filter(cz => Object.values(cz).join(' ').toLowerCase().includes(q))
        cb(false, cervezs)
    },
    find(cb) {
        cb(false, cervezas)
    },
    findOne(query, cb) {
        let cerveza = cervezas.find(cerveza => cerveza._id == query._id)
        cb(!cerveza, cerveza)
    },

    save(cerveza, cb) {
        if (cerveza) {
            cervezas.push(cerveza)
            cb(false, cerveza)
        }
        else {
            cb(true, cerveza)
        }
    },
    update(id, cerveza, cb) {
        let index = cervezas.findIndex(cerveza => cerveza._id == id)
        if (index == -1)
            cb(true, null)
        cervezas.splice(index, 1, cerveza)
        cb(false, cerveza)
    },

    findByIdAndRemove(id, cb) {
        let index = cervezas.findIndex(cerveza => cerveza._id == id)
        if (index == -1)
            cb(true, null)
        let cerveza = cervezas[index]
        cervezas.splice(index, 1)
        cb(false, cerveza)
    }
}