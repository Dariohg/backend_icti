import express from "express";
import {getTipoContrato} from "../controllers/TipoContratoController.js";

const router = express.Router()

router.get('/', getTipoContrato)

export default router