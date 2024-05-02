import express from "express";
import {getAllDireccion, getAllDireccionByDependenciaId} from "../controllers/DireccionController.js";

const router = express.Router()

router.get('/', getAllDireccion)
router.get('/direccionById', getAllDireccionByDependenciaId);
export default router