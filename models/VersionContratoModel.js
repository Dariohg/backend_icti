import db from "../database/db.js";
import {DataTypes} from "sequelize";

const VersionContratoModel = db.define('version_contrato',{
    id_version: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_version'
    },
    descripcion: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},
    id_tipoContrato: {type: DataTypes.INTEGER}

}, {
    tableName: 'version_contrato',
    timestamps: false
});

export default VersionContratoModel;
