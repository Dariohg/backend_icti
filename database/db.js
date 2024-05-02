import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Obtener las variables de entorno necesarias
const { DB, USER, PASS, HOST, PORT } = process.env;


// Crear la instancia de Sequelize con los datos de la base de datos
const db = new Sequelize(DB, 'root', PASS, {
    host: HOST,
    port: PORT,
    dialect: "mysql", // Puedes cambiar el dialecto según tu base de datos
});

// Ahora puedes usar `sequelize` para interactuar con tu base de datos
export default db

try {
    await db.authenticate();
    console.log('Conexión establecida con éxito.');
} catch (error) {
    console.error('No se pudo establecer la conexión:', error);
}