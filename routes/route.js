import express from 'express'
import {
    createEnlace,
    deleteEnlace,
    getAllEnlaces,
    getEnlace,
    updateEnlace,
    getAllEnlacesByEstatusId, updateEnlaceEliminado
} from "../controllers/EnlaceController.js";

const router = express.Router()

router.get('/',getAllEnlaces)
router.get('/status', getAllEnlacesByEstatusId)
router.get('/:id',getEnlace)
router.post('/',createEnlace)
router.put('/:id',updateEnlace)
router.delete('/:id',deleteEnlace)
router.put('/eliminar/:id',updateEnlaceEliminado)

export default router