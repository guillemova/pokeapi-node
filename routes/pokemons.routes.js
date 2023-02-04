const { Router } = require("express");
const { getAllPokemons, findPokemon, createPokemon, updatePokemon, deletePokemon } = require("../controllers/pokemons.controllers.js")

const router = Router()

router.get("", getAllPokemons)

router.get("/:id", findPokemon)

router.post("",createPokemon)

router.patch("/:id", updatePokemon)

router.delete("/:id", deletePokemon)

module.exports = {
    pokemonsRouter: router
}