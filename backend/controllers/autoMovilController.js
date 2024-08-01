const mongoose = require('mongoose');
const AutoMovil = require('../models/AutoMovil');

exports.createAutoMovil = async (req, res) => {

    const imagenPath = req.file ? req.file.filename : ''; // Ruta de la imagen guardada en el servidor

    const autoMovil = new AutoMovil({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      anio: req.body.anio,
      color: req.body.color,
      imagen: imagenPath
    });
    
    try {
      const nuevoAuto = await autoMovil.save();
      res.status(201).json(nuevoAuto);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };