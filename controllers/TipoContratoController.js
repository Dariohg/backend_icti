import TipoContratoModel from "../models/TipoContratoModel.js";

export const getTipoContrato = async (req, res) => {
    try {
        const TipoContrato = await TipoContratoModel.findAll()
        res.json(TipoContrato);
    } catch (error) {
        res.status(500).json(
            {message: error.message}
        );
    }
};