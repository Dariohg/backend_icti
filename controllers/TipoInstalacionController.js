import TipoInstalacionModel from "../models/TipoInstalacionModel.js";

export const getAllTipoInstalacion = async (req, res) => {
    try {
        const tipoInstalacion = await TipoInstalacionModel.findAll();
        res.json(tipoInstalacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
