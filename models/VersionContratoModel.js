import db from "../database/db.js";
import {DataTypes} from "sequelize";

const VersionContratoModel = db.define('CatalogoDireccion',{
    id_contrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_contrato'
    },
    descripcion: {type: DataTypes.STRING},
    estatus_id: {type: DataTypes.INTEGER},
    id_TipoContrato: {type: DataTypes.INTEGER}

}, {
    tableName: 'version_contrato',
    timestamps: false
});

export default VersionContratoModel;
