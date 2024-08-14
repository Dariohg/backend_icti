import VersionContratoModel from "../models/VersionContratoModel.js";

export const getAllVersionContrato = async (req, res) => {
    try {
        const VersionContrato = await VersionContratoModel.findAll()
        res.json(VersionContrato);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getVersionesByTipoContrato = async (req, res) => {
    const { id_tipoContrato } = req.params; // Obtiene el id_tipoContrato desde los parámetros de la URL

    try {
        const versiones = await VersionContratoModel.findAll({
            where: {
                id_tipoContrato: id_tipoContrato
            }
        });

        if (versiones.length > 0) {
            res.json(versiones);
        } else {
            res.status(404).json({ message: 'No se encontraron versiones para el tipo de contrato proporcionado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
