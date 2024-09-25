const mongoose = require("mongoose"); //Importar componente mongoose

const areaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    animales: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal'}]
});
module.exports = mongoose.model('Area', areaSchema);