// EnlaceModel.js
import db from "../database/db.js";
import {DataTypes} from "sequelize";
import CargoEnlaceModel from "./CargoEnlaceModel.js";
import CatalagoDepartamentoModel from "./CatalagoDepartamentoModel.js";
import CatalagoDireccionModel from "./CatalagoDireccionModel.js"; // Importa el modelo de CargoEnlace

const EnlaceModel = db.define('enlace',{
    idEnlace: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idEnlace'
    },
    nombre: {type: DataTypes.STRING},
    apellidoP: {type: DataTypes.STRING},
    apellidoM: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING},
    idDependencia: {type: DataTypes.INTEGER},
    idDireccion: {type: DataTypes.INTEGER},
    idDepartamento: {type: DataTypes.INTEGER},
    idCargo: {type: DataTypes.INTEGER},
    estatus_id : {type: DataTypes.INTEGER},
}, {
    tableName: 'enlace',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

// Definir la asociación
EnlaceModel.belongsTo(CargoEnlaceModel, {
    foreignKey: 'idCargo',
    as: 'cargoEnlace', // Nombre de la relación
});
EnlaceModel.belongsTo(CatalagoDepartamentoModel, {
    foreignKey: 'idDepartamento',
    as: 'departamento'
});
EnlaceModel.belongsTo(CatalagoDireccionModel, {
    foreignKey: 'idDireccion',
    as: 'direccion'
});


export default EnlaceModel;
