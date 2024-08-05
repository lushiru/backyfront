const express = require('express');
const router = express.Router();
const multer = require("multer");
const autoMovilController = require('../controllers/autoMovilController');

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"imagenes"); // Ruta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname); // Agrega un timestamp al nombre del archivo
    }
  });
const upload = multer({ storage: storage });

// Rutas para los hechizos
router.get('/', autoMovilController.getAutoMoviles);
router.get('/ultimos', autoMovilController.getUltimosfive);
router.get('/:id', autoMovilController.getAutoMovilById);
router.post('/', upload.single("imagen"), autoMovilController.createAutoMovil);
router.put('/:id', upload.single("imagen"), autoMovilController.updateAutoMovil);
router.delete('/:id', autoMovilController.deleteAutoMovil);

module.exports = router;