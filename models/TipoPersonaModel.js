import db from "../database/db.js";
import {DataTypes} from "sequelize";

const TipoPersonaModel = db.define('tipo_persona',{
    id_tipoPersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_tipoPersona'
    },
    descripcion: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER}
}, {
    tableName: 'tipo_persona',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default TipoPersonaModel;

