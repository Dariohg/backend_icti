import express from "express";
import {getAllVersionContrato} from "../controllers/VersionContratoController.js";

const router = express.Router()

router.get('/', getAllVersionContrato)

export default router