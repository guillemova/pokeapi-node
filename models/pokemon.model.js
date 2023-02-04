const { DataTypes } = require("sequelize");
const { db } = require("../database/db");



//Cuando definimos un modelo es importante que comienze con mayuscula ej: User - Pokemon - Products 
const Pokemon = db.define("Pokemon", { 
    id: {    //Identificacion del registro que se esta guardando
        primaryKey: true, //Llave primaria
        autoIncrement: true, //Autoincremento para que sea unico
        allowNull:false, //No permite que sea null, para que tenga un valor positivo
        type:DataTypes.INTEGER
    },
    
    name:{
        type:DataTypes.STRING, //Tipo de dato, ej: string, integer, boolean.
        allowNull:false
    },

    image:{
        type:DataTypes.STRING,
        allowNull:true //Permite que tenga o no la imagen del pokemon
    },

    status: {
        type:DataTypes.STRING,
        defaultValue:"available",
        allowNull:false
    }

    })


    module.exports = Pokemon
        