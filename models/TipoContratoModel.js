import db from "../database/db.js";
import {DataTypes} from "sequelize";

const TipoContratoModel = db.define('TipoContrato',{
    id_tipoContrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_tipoContrato'
    },
    nombre: {type: DataTypes.STRING},
    estatus_id: {type: DataTypes.INTEGER},
    eliminado: {type: DataTypes.INTEGER}

}, {
    tableName: 'tipo_contrato',
    timestamps: false
});

export default TipoContratoModel;
