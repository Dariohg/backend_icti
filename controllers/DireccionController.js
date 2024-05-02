import CatalagoDireccionModel from "../models/CatalagoDireccionModel.js";

export const getAllDireccion = async (req, res) => {
    try {
        const cargo = await CatalagoDireccionModel.findAll()
        res.json(cargo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getAllDireccionByDependenciaId = async (req, res) => {
    const { dependencia_id } = req.query;

    try {
        const direccion = await CatalagoDireccionModel.findAll({
            where: {
                dependencia_id: dependencia_id
            }
        });
        res.json(direccion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

