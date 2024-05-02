import express from "express";
import cors from 'cors'
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

const app = express()

app.use(cors())
app.use(express.json())

app.use('/enlace',enlaceRoutes)
app.use('/cargo',cargoRouter)
app.use('/direccion',direccionRouter)
app.use('/dependencia',dependenciaRouter)
app.use('/departamento',departamentoRouter)
app.use('/versionContrato',versionContratoRouter)
app.use('/tipoContrato',tipoContratoRouter)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
}catch (error){
    console.log(`El error de conexion es:${error}`)
}


app.listen(8000,()=>{
    console.log('Server running in http://localhost:8000/')
})