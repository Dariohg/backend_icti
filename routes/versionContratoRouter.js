import express from "express";
import {getAllVersionContrato, getVersionesByTipoContrato} from "../controllers/VersionContratoController.js";

const router = express.Router()

router.get('/', getAllVersionContrato)
router.get('/tipoContrato/:id_tipoContrato', getVersionesByTipoContrato);

export default router