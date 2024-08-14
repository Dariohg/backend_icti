import UsuarioModel from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";

const secret = process.env.JWT_SECRET || 'secret';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try{
        const usuario = await UsuarioModel.findOne({
            where: {
                username: username
            }
        });

        const validPassword = bcrypt.compareSync(password, usuario.dataValues.password);

        if(usuario && validPassword){
            const token = jwt.sign({id: usuario.idUsuario, correo: usuario.correo, username: usuario.username}, secret);

            console.log('Configurando cookie...');

            res.cookie('token', token, {
                httpOnly: false,
                // path: "/login",
                // domain: "localhost",
                secure: false,
                path: '/',
                // sameSite: 'lax',
                maxAge: 3600000, // 1 horas en milisegundos
            });

            // res.send("Cookie Set" + token);

            res.status(200).json({
                status: 'success',
                message: 'Usuario autenticado',
                token: token,
                superuser: usuario.superuser
            });
        }else{
            res.status(404).json({message: 'Correo o contraseña incorrectos'});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const register = async (req, res) => {
    const { nombre, apellidoP, apellidoM, correo, password, telefono, cargoAdministrativo, departamento, username, superuser } = req.body;

    try{
        const hashedPassword = bcrypt.hashSync(password, 10);

        const usuario = await UsuarioModel.create({
            username: username,
            nombre: nombre,
            apellidoP: apellidoP,
            apellidoM: apellidoM,
            correo: correo,
            password: hashedPassword,
            telefono: telefono,
            cargoAdministrativo: cargoAdministrativo,
            departamento: departamento,
            superuser: superuser
        });

        if(usuario){
            res.status(201).json({
                status: 'success',
                message: 'Usuario creado correctamente',
                data: usuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'No se pudo crear el usuario'
            });
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
}