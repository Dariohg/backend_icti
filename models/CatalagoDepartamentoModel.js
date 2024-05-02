import db from "../database/db.js";
import {DataTypes} from "sequelize";

const CatalagoDepartamentoModel = db.define('catalogo_departamento',{
    idDepartamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idDepartamento'
    },
    nombreDepartamento: {type: DataTypes.STRING},
    direccion_id: {type: DataTypes.INTEGER}
}, {
    tableName: 'catalogo_departamento',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default CatalagoDepartamentoModel;
