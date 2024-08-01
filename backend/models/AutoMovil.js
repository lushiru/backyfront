const mongoose = require('mongoose');

const autoMovilSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  anio: { type: Number, required: true },
  color: {type: String, required: true },
  imagen: { type: String , default: ''},  
});

module.exports = mongoose.model('automoviles', autoMovilSchema);