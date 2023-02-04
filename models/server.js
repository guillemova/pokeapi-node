const express = require("express")
const cors = require("cors")
const { db } = require("../database/db")
const { pokemonsRouter } = require("../routes/pokemons.routes")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 4000

        this.paths = {
            pokemons:"/api/v1/pokemons"
        }

        this.database()

        this.middlewares()

        this.routes()

    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    database() {
        db.authenticate()
        .then(() => console.log("Database Authenticted"))
        .catch(err => console.log(err))

        db.sync()
        .then(() => console.log("Database Synced"))
        .catch(err => console.log(err))
    }


    routes() {
        this.app.use(this.paths.pokemons, pokemonsRouter)
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`))
    }

}

module.exports = Server