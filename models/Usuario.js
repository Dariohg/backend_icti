import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const UsuarioModel = db.define('usuario',{
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'idUsuario'
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellidoP:{
        type:DataTypes.STRING
    },
    apellidoM:{
        type:DataTypes.STRING
    },
    correo:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.STRING
    },
    cargoAdministrativo:{
        type:DataTypes.INTEGER
    },
    departamento:{
        type:DataTypes.INTEGER
    },
    username:{
        type:DataTypes.STRING
    },
    superuser:{
        type:DataTypes.TINYINT
    }
}, 
{
    tableName: 'usuario',
    timestamps: false
});

export default UsuarioModel;