import express from "express";
import {getAllDependencia} from "../controllers/DependenciaController.js";

const router = express.Router()

router.get('/', getAllDependencia)

export default router