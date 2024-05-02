import DependenciaModel from "../models/DependenciaModel.js";

export const getAllDependencia = async (req, res) => {
    try {
        const cargo = await DependenciaModel.findAll()
        res.json(cargo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};