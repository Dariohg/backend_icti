import express from 'express';
import {createEnlaceContrato, getAllContratos, getContratosByEnlaceId} from '../controllers/ContratoController.js';

const router = express.Router();

// Ruta para crear un nuevo contrato
router.post('/createContrato', createEnlaceContrato);
router.get('/',getAllContratos);
router.get('/byId/:idPersona', getContratosByEnlaceId);


export default router;
