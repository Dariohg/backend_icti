import db from "../database/db.js";
import {DataTypes} from "sequelize";

const StatusModel = db.define('status',{
    id_status: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'id_status'
    },
    status: {type: DataTypes.STRING},
}, {
    tableName: 'status',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default StatusModel;

