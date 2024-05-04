// EnlacePersonaModel.js
import db from "../database/db.js";
import {DataTypes} from "sequelize";
import CargoEnlaceModel from "./CargoEnlaceModel.js";
import CatalagoDepartamentoModel from "./CatalagoDepartamentoModel.js";
import CatalagoDireccionModel from "./CatalagoDireccionModel.js"; // Importa el modelo de CargoEnlace

const EnlacePersonaModel = db.define('enlace_persona',{
    idPersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idPersona'
    },
    nombre: {type: DataTypes.STRING},
    apellidoP: {type: DataTypes.STRING},
    apellidoM: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},
    adscripcion_id: {type: DataTypes.INTEGER},
    cargo_id: {type: DataTypes.INTEGER},
    auth_user_id: {type: DataTypes.INTEGER},
    tipoPersona_id: {type: DataTypes.INTEGER},
    direccion_id: {type: DataTypes.INTEGER},
}, {
    tableName: 'enlace_persona',
    timestamps: false
});

// Definir la asociación
EnlacePersonaModel.belongsTo(CargoEnlaceModel, {
    foreignKey: 'cargo_id',
    as: 'cargoEnlace', // Nombre de la relación
});
EnlacePersonaModel.belongsTo(CatalagoDepartamentoModel, {
    foreignKey: 'adscripcion_id',
    as: 'departamento'
});
EnlacePersonaModel.belongsTo(CatalagoDireccionModel, {
    foreignKey: 'direccion_id',
    as: 'direccion'
});


export default EnlacePersonaModel;
