import db from "../database/db.js";
import {DataTypes} from "sequelize";

const CargoEnlaceModel = db.define('cargo_enlace',{
    idCargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idCargo'
    },
    nombreCargo: {type: DataTypes.STRING},
}, {
    tableName: 'cargo_enlace',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default CargoEnlaceModel;
