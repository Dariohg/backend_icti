import EnlaceModel from "../models/EnlaceModel.js";
import CargoEnlaceModel from "../models/CargoEnlaceModel.js";
import CatalagoDepartamentoModel from "../models/CatalagoDepartamentoModel.js";
import catalagoDireccionModel from "../models/CatalagoDireccionModel.js";



//mostrar todos los enlaces
{/*export const getAllEnlaces = async (req, res)=>{
    try {
        const enlace = await EnlaceModel.findAll()
        res.json(enlace)
    }catch (error){
        res.json({message: error.message})
    }
}*/}
//mostrar todos los enlaces
// EnlaceController.js

    export const getAllEnlaces = async (req, res) => {
        try {
            const enlaces = await EnlaceModel.findAll({
                include: [
                    {
                        model: CargoEnlaceModel,
                        as: 'cargoEnlace',
                        attributes: ['nombreCargo']
                    },
                    {
                        model: CatalagoDepartamentoModel,
                        as: 'departamento',
                        attributes: ['nombreDepartamento']
                    },
                    {
                        model: catalagoDireccionModel,
                        as: 'direccion',
                        attributes: ['nombreDireccion']
                    }
                ]
            });
            res.json(enlaces);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    };

export const getAllEnlacesByEstatusId = async (req, res) => {
    const { estatus_id } = req.query;
    try {
        const enlaces = await EnlaceModel.findAll({
            where: {
                estatus_id
            },
            include: [
                {
                    model: CargoEnlaceModel,
                    as: 'cargoEnlace',
                    attributes: ['nombreCargo']
                },
                {
                    model: CatalagoDepartamentoModel,
                    as: 'departamento',
                    attributes: ['nombreDepartamento']
                },
                {
                    model: catalagoDireccionModel,
                    as: 'direccion',
                    attributes: ['nombreDireccion']
                }
            ]
        });
        res.json(enlaces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Mostrar un enlace
export const getEnlace = async (req, res) => {
    try {
        const enlace = await EnlaceModel.findOne({
            where: { idEnlace: req.params.id },
            include: [
                {
                    model: CargoEnlaceModel,
                    as: 'cargoEnlace',
                    attributes: ['nombreCargo']
                },
                {
                    model: CatalagoDepartamentoModel,
                    as: 'departamento',
                    attributes: ['nombreDepartamento']
                },
                {
                    model: catalagoDireccionModel,
                    as: 'direccion',
                    attributes: ['nombreDireccion']
                }
            ]
        });
        res.json(enlace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//Crear un enlace
    export const createEnlace = async (req, res) => {
        try {
            await EnlaceModel.create(req.body)
            res.json({
                "message": "Enlace creado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    }

//actualizar un registro
    export const updateEnlace = async (req, res) => {
        try {
            await EnlaceModel.update(req.body, {
                where: {idEnlace: req.params.id}
            })
            res.json({
                "message": "Enlace actualizado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    }

export const updateEnlaceEliminado = async (req, res) => {
    try {
        const { estatus_id } = req.body;
        await EnlaceModel.update({ estatus_id: 3 }, {
            where: { idEnlace: req.params.id }
        });
        res.json({
            "message": "Enlace actualizado correctamente"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//Eliminar un enlace
    export const deleteEnlace = async (req, res) => {
        try {
            await EnlaceModel.destroy({
                where: {idEnlace: req.params.id}
            })
            res.json({
                "message": "Enlace eliminado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    }
