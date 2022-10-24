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
route.post('api/listUsers', controller.create)
route.get('api/listUsers', controller.find)
route.put('api/listUsers/:id', controller.update)
route.delete('api/listUsers/:id', controller.delete)



module.exports = route;