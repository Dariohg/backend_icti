import CargoEnlaceModel from "../models/CargoEnlaceModel.js";

// Mostrar un enlace con el nombre del cargo

export const getAllCargo = async (req, res) => {
    try {
        const cargo = await CargoEnlaceModel.findAll()
        res.json(cargo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

