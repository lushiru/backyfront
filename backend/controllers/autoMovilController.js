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

  exports.getAutoMoviles = async (req, res) => {
    try {
      const autoMoviles = await AutoMovil.find();
      res.json(autoMoviles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.getAutoMovilById = async (req, res) => {
    try {
      const autoMovil = await AutoMovil.findById(req.params.id);
      if (autoMovil) {
        res.status(201).json(autoMovil);
      } else {
        res.status(404).json({ message: 'autoMovil no encontrado' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.updateAutoMovil = async (req, res) => {
    try {
      const autoMovil = await AutoMovil.findById(req.params.id);
      if (autoMovil) {
        autoMovil.nombre = req.body.nombre || autoMovil.nombre;
        autoMovil.descripcion = req.body.descripcion || autoMovil.descripcion;
        autoMovil.anio = req.body.anio || autoMovil.anio;
        autoMovil.color = req.body.color || autoMovil.color;
        const imagenPath = req.file ? req.file.filename : '';
        if(imagenPath!="") autoMovil.imagen = imagenPath;
        
        const autoMovilActualizado = await autoMovil.save();
        res.json(autoMovilActualizado);
      } else {
        res.status(404).json({ message: 'AutoMovil no encontrado' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.deleteAutoMovil = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }
  
    try {
      const autoMovil = await AutoMovil.findById(req.params.id);
      if (autoMovil) {
        await autoMovil.deleteOne();
        res.json({ message: 'Automovil eliminado' });
      } else {
        res.status(404).json({ message: 'Automovil no encontrado' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };