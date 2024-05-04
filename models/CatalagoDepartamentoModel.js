import db from "../database/db.js";
import {DataTypes} from "sequelize";

const CatalagoDepartamentoModel = db.define('catalago_departamento',{
    idDepartamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idDepartamento'
    },
    nombreDepartamento: {type: DataTypes.STRING},
    id_direccion: {type: DataTypes.INTEGER}
}, {
    tableName: 'catalago_departamento',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default CatalagoDepartamentoModel;
