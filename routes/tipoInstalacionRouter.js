import express from 'express';
import { getAllTipoInstalacion } from '../controllers/TipoInstalacionController.js';

const router = express.Router();

// Ruta para obtener todos los tipos de instalación
router.get('/', getAllTipoInstalacion);

export default router;
