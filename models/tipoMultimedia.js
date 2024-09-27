const {Schema, model} = require ('mongoose')

const TipoMultimedia = Schema({
    nombre:{
        type: String,
        unique: [true,'Este nombre ya existe']
    },
    fecha_creacion:{
        type: Date
    },
    fecha_actualizacion:{
        type: Date
    },
    descripcion:{
        type: String
    }
})

module.exports = model('TipoMultimedia', TipoMultimedia)