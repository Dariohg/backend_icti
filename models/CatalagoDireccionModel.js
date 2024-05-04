import db from "../database/db.js";
import {DataTypes} from "sequelize";

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

export default CatalagoDireccionModel;
