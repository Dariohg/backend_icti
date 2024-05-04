import db from "../database/db.js";
import {DataTypes} from "sequelize";

const CatalagoServicioModel = db.define('catalagoServicio',{
    idServicio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idServicio'
    },
    descripcion: {type: DataTypes.STRING},
    estatus: {type: DataTypes.INTEGER},
}, {
    tableName: 'catalagoServicio',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default CatalagoServicioModel;

