const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const autoMovilController = require('../controllers/autoMovilController');

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images/")); // Ruta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Agrega un timestamp al nombre del archivo
    }
  });
const upload = multer({ storage: storage });

// Rutas para los hechizos
//router.get('/', hechizoController.getHechizos);
//router.get('/:id', hechizoController.getHechizoById);
router.post('/', upload.single("imagen"), autoMovilController.createAutoMovil);
//router.put('/:id', hechizoController.updateHechizo);
//router.delete('/:id', hechizoController.deleteHechizo);

module.exports = router;