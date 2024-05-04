import db from "../database/db.js";
import {DataTypes} from "sequelize";

const EnlaceServicioModel = db.define('enlace_servicio',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idCargo'
    },
    idServicio: {type: DataTypes.STRING},
    inicio: {type: DataTypes.DATE},
    termino: {type: DataTypes.DATE},
    envio: {type: DataTypes.DATE},
    descripcion_falla: {type: DataTypes.STRING},
    tipo_actividad: {type: DataTypes.INTEGER},
    descripcion_actividad: {type: DataTypes.STRING},
    estado_servicio: {type: DataTypes.INTEGER},
    fotos: {type: DataTypes.INTEGER},
    observaciones: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},
    id_catalago_servicio: {type: DataTypes.INTEGER},
    id_contrato: {type: DataTypes.INTEGER},
    id_user: {type: DataTypes.INTEGER},
}, {
    tableName: 'enlace_servicio',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default EnlaceServicioModel;

