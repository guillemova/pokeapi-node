const Pokemon = require("../models/pokemon.model.js");

const getAllPokemons = async (req, res) => {
  try {
    const { count, rows } = await Pokemon.findAndCountAll({
      attributes: ["id", "name", "image"],
      where: {
        status: "available",
      },
    });

    res.status(200).json({
      status: "success",
      count,
      results: rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const findPokemon = async (req, res) => {
  try {
    const { id } = req.params;

    const pokemon = await Pokemon.findOne({
      attributes: ["id", "name", "image"],
      where: {
        id,
        status: "available",
      },
    });

    if (!pokemon) {
      return res.status(404).json({
        status: "Error",
        message: "Who is that pokemon, catch them all",
      });
    }
    res.status(200).json({
      status: "success",
      pokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

const createPokemon = async (req, res) => {
  try {
    const { name, image } = req.body;

    const pokemon = await Pokemon.create({ name, image });

    res.status(200).json({
      status: "success",
      message: "Pokemon created successfully",
      pokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Server Internal Error",
    });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params
    const { name, image } = req.body
    const pokemon = await Pokemon.findOne({
      where:{
        id,
        status:"available"
      }
    });
  
    if(!pokemon){
      return res.status(404).json({
        status:"Error",
        message:"who is that pokemon, catch them all"
      })
    }
    //Actualizar nombre y imagen del pokemon
    await pokemon.update({ name, image })
  
    res.status(200).json({
      status: "success",
      message: "Pokemon update successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Server Internal Error",
    });
  }
  

};

const deletePokemon = async (req, res) => {
  try {

    const { id } = req.params
    const pokemon = await Pokemon.findOne({
      where:{
        id,
        status:"available",
      },
    })

    if(!pokemon) {
      return res.status(404).json({
        status:"Error",
        message:"who is that pokemon? catch them all"
      })
    }
    
    await pokemon.update({status:"disabled"})

    res.status(200).json({
      status: "success",
      message: "pokemon deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Server Internal Error",
    });
  }
}
 

module.exports = {
  getAllPokemons,
  findPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
};


