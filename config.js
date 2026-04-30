import mysql from 'mysql2/promise';

// conexion hacia la pagina de sql
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cli_crud",
    waitForConnections: true,
    connectionLimit: 10
})

export { db }