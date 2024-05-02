import db from "../database/db.js";
import {DataTypes} from "sequelize";

const CatalagoDireccionModel = db.define('CatalogoDireccion',{
    idDireccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idDireccion'
    },
    nombreDireccion: {type: DataTypes.STRING},
    dependencia_id: {type: DataTypes.INTEGER},
    idPadre_id: {type: DataTypes.INTEGER}

}, {
    tableName: 'catalogoDireccion',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default CatalagoDireccionModel;
