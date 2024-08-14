import db from "../database/db.js";
import {DataTypes} from "sequelize";
import TipoInstalacionModel from "./TipoInstalacionModel.js";
import VersionContratoModel from "./VersionContratoModel.js";
import EnlacePersonaModel from "./EnlacePersonaModel.js";

const EnlaceContratoModel = db.define('enlace_contrato',{
    idContrato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idContrato'
    },
    persona_id: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},
    descripcion: {type: DataTypes.STRING},
    fechaContrato: {type: DataTypes.DATE},
    id_user: {type: DataTypes.INTEGER},
    id_versionContrato: {type: DataTypes.INTEGER},
    ubicacion: {type: DataTypes.INTEGER},
    id_tipoContrato: {type: DataTypes.INTEGER}
}, {
    tableName: 'enlace_contrato',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

EnlaceContratoModel.belongsTo(EnlacePersonaModel, {
    foreignKey: 'persona_id',
    as: 'persona'
});

EnlaceContratoModel.belongsTo(VersionContratoModel, {
    foreignKey: 'id_versionContrato',
    as: 'versionContrato'
});

EnlaceContratoModel.belongsTo(TipoInstalacionModel, {
    foreignKey: 'ubicacion',
    as: 'ubicacionInstalacion'
});

export default EnlaceContratoModel;

