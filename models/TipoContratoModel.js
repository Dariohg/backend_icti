import db from "../database/db.js";
import {DataTypes} from "sequelize";

const TipoContratoModel = db.define('catalago_tipoContrato',{
    idTipoContrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idTipoContrato'
    },
    nombre: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},

}, {
    tableName: 'catalago_tipoContrato',
    timestamps: false
});

export default TipoContratoModel;
