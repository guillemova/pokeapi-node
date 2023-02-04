const Sequelize = require("sequelize")

const db = new Sequelize({
    dialect:process.env.DB_DIALECT, //Seleccionar el dialecto del motor de la base de datos 
    host:process.env.DB_HOST, //Direccion donde se encuentra la base de datos 170.0.0.1
    username:process.env.DB_USERNAME, //Usuario por defectos = postgres
    password:process.env.DB_PASSWORD, //Contraseña de postgres
    database:process.env.DB_DATABASE, //Nombre de la base de datos
    logging:false // Mostrar los logs de la base de detos en consola
})

module.exports = { db }