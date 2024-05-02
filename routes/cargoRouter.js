import express from "express";
import {getAllCargo} from "../controllers/CargoEnlaceController.js";

const router = express.Router()

router.get('/', getAllCargo)

export default router