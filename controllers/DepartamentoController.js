import catalagoDepartamentoModel from "../models/CatalagoDepartamentoModel.js";
import CatalagoDireccionModel from "../models/CatalagoDireccionModel.js";

export const getAllDepartamento = async (req, res) => {
    try {
        const cargo = await catalagoDepartamentoModel.findAll()
        res.json(cargo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getAllDepartamentoByDireccionId = async (req, res) => {
    const { id_direccion } = req.query;

    try {
        const departamento = await catalagoDepartamentoModel.findAll({
            where: {
                id_direccion: id_direccion
            }
        });
        res.json(departamento);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
