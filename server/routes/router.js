const express = require("express")
const route = express.Router()

const services = require("../services/render")

const controller = require("../controller/controllerModel")


/**
 * @description Route
 * @method GET/
 */
route.get("/", services.homeRoutes)

route.get("/listUsers", services.listUsers)

route.get("/updoat", services.updoat)

//API CRUD
route.post("/api/users", controller.create)
route.get("/api/users", controller.find)
route.put("/api/users/:id", controller.update)
route.delete("api/users/:id", controller.delete)



module.exports = route;