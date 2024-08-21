import EnlaceContratoModel from "../models/EnlaceContratoModel.js";
import EnlacePersonaModel from "../models/EnlacePersonaModel.js";
import VersionContratoModel from "../models/VersionContratoModel.js";
import TipoInstalacionModel from "../models/TipoInstalacionModel.js";
import TipoContratoModel from '../models/TipoContratoModel.js';


export const getAllContratos = async (req, res) => {
    try {
        const contratos = await EnlaceContratoModel.findAll({
            include: [
                {
                    model: EnlacePersonaModel,
                    as: 'persona',
                    attributes: ['nombre', 'apellidoP', 'apellidoM'], // Campos que quieres incluir
                },
                {
                    model: VersionContratoModel,
                    as: 'versionContrato',
                    attributes: ['descripcion'], // Campo que quieres incluir
                },
                {
                    model: TipoInstalacionModel,
                    as: 'ubicacionInstalacion',
                    attributes: ['nombre'], // Campo que quieres incluir
                },
                {
                    model: TipoContratoModel, // Asegúrate de incluir este modelo
                    as: 'tipoContrato',
                    attributes: ['nombre'], // Aquí obtienes el nombre del contrato
                }
            ]
        });

        // Personalizar la respuesta según los requerimientos
        const formattedContratos = contratos.map(contrato => ({
            idContrato: contrato.idContrato,
            persona: `${contrato.persona.nombre} ${contrato.persona.apellidoP} ${contrato.persona.apellidoM}`,
            estatus: contrato.estatus,
            descripcion: contrato.descripcion,
            fechaContrato: contrato.fechaContrato,
            usuario: contrato.id_user,
            versionContrato: contrato.versionContrato.descripcion,
            ubicacion: contrato.ubicacionInstalacion.nombre,
            tipoContrato: contrato.tipoContrato.nombre
        }));

        res.json(formattedContratos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContratosByEnlaceId = async (req, res) => {
    const { idPersona } = req.params;

    try {
        const contratos = await EnlaceContratoModel.findAll({
            where: {
                persona_id: idPersona,
            },
            include: [
                {
                    model: EnlacePersonaModel,
                    as: 'persona',
                    attributes: ['nombre', 'apellidoP', 'apellidoM'],
                },
                {
                    model: VersionContratoModel,
                    as: 'versionContrato',
                    attributes: ['descripcion'],
                },
                {
                    model: TipoInstalacionModel,
                    as: 'ubicacionInstalacion',
                    attributes: ['nombre'],
                },
                {
                    model: TipoContratoModel, // Asegúrate de incluir este modelo
                    as: 'tipoContrato',
                    attributes: ['nombre'], // Aquí obtienes el nombre del contrato
                }
            ]
        });

        const formattedContratos = contratos.map(contrato => ({
            idContrato: contrato.idContrato,
            persona: `${contrato.persona.nombre} ${contrato.persona.apellidoP} ${contrato.persona.apellidoM}`,
            estatus: contrato.estatus,
            descripcion: contrato.descripcion,
            fechaContrato: contrato.fechaContrato,
            usuario: contrato.id_user,
            versionContrato: contrato.versionContrato.descripcion,
            ubicacion: contrato.ubicacionInstalacion.nombre,
            tipoContrato: contrato.tipoContrato.nombre // Cambia esto para mostrar el nombre en lugar del ID
        }));

        res.json(formattedContratos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




export const createEnlaceContrato = async (req, res) => {
    try {
        await EnlaceContratoModel.create(req.body);
        res.json({
            "message": "Contrato creado correctamente"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

