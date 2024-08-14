import db from "../database/db.js";
import {DataTypes} from "sequelize";
import DependenciaModel from "./DependenciaModel.js"; // Importa el modelo de Dependencia


const CatalagoDireccionModel = db.define('CatalagoDireccion',{
    idDireccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idDireccion'
    },
    nombre: {type: DataTypes.STRING},
    dependencia_id: {type: DataTypes.INTEGER},
    idPadre_id: {type: DataTypes.INTEGER}

}, {
    tableName: 'catalagoDireccion',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

CatalagoDireccionModel.belongsTo(DependenciaModel, {
    foreignKey: 'dependencia_id',
    as: 'dependencia'
});

export default CatalagoDireccionModel;
