import express from "express";
import {getAllDepartamento, getAllDepartamentoByDireccionId} from "../controllers/DepartamentoController.js";

const router = express.Router()

router.get('/', getAllDepartamento)
router.get('/departamentoById',getAllDepartamentoByDireccionId)

export default router