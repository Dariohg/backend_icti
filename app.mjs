import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
//importamos la conexion de la base de datos
import db from "./database/db.js";
//importamos nuestro enrutador
import enlaceRoutes from "./routes/route.js";
import cargoRouter from "./routes/cargoRouter.js";
import direccionRouter from "./routes/direccionRouter.js";
import dependenciaRouter from "./routes/dependenciaRouter.js";
import departamentoRouter from "./routes/departamentoRouter.js";
import versionContratoRouter from "./routes/versionContratoRouter.js";
import tipoContratoRouter from "./routes/tipoContratoRouter.js";
import authRouter from "./routes/authRouter.js";

const app = express()

const allowedOrigins = [
    'http://localhost:3001', 
    'http://localhost:5173', 
    'http://localhost:5174',
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true); 
        } else {
            return callback(new Error('CORS not allowed'), false); 
        }
    },
    credentials: true, 
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie', 'Cookie', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'],
}));

// app.use(cors({
//     origin: '*',
//     credentials: true,
// }));

app.use(express.json())

app.use(cookieParser())

app.use('/enlace',enlaceRoutes)
app.use('/cargo',cargoRouter)
app.use('/direccion',direccionRouter)
app.use('/dependencia',dependenciaRouter)
app.use('/departamento',departamentoRouter)
app.use('/versionContrato',versionContratoRouter)
app.use('/tipoContrato',tipoContratoRouter)
app.use('/auth',authRouter)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
}catch (error){
    console.log(`El error de conexion es:${error}`)
}

app.listen(8000,()=>{
    console.log('Server running in http://localhost:8000/')
})