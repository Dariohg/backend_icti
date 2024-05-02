import db from "../database/db.js";
import {DataTypes} from "sequelize";

const DependenciaModel = db.define('catalogoDependencia_enlace',{
    idDependencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idDependencia'
    },
    nombreCorto: {type: DataTypes.STRING},
    nombreDependencia: {type: DataTypes.STRING},
    ubicacionDependencia: {type: DataTypes.STRING},
    codigoPostal: {type: DataTypes.INTEGER},
    colonia: {type: DataTypes.STRING},
    conmutador: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    fax: {type: DataTypes.STRING},
    idDependenciatxt: {type: DataTypes.STRING},
    idMunicipio: {type: DataTypes.INTEGER},
    idSector: {type: DataTypes.INTEGER},
    telefonoDirecto: {type: DataTypes.STRING},
    tipoOrgano: {type: DataTypes.INTEGER},
    web: {type: DataTypes.STRING}
}, {
    tableName: 'catalogoDependencia_enlace',
    timestamps: false // Desactivar las columnas createdAt y updatedAt
});

export default DependenciaModel;
