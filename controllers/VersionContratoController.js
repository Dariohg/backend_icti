import VersionContratoModel from "../models/VersionContratoModel.js";

export const getAllVersionContrato = async (req, res) => {
    try {
        const VersionContrato = await VersionContratoModel.findAll()
        res.json(VersionContrato);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};