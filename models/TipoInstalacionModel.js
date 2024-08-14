import db from "../database/db.js";
import {DataTypes} from "sequelize";

const TipoInstalacionModel = db.define('tipo_persona',{
    id_tipoInstalacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_tipoInstalacion'
    },
    nombre: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER}
}, {
    tableName: 'tipo_instalacion',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default TipoInstalacionModel;

