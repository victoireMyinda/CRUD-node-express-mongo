const userDB = require('../model/model');


//Create and save user 
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        reportError.status(400)
            .send({ message: "request can not be empty" })
        return;
    }

    //new user 
    const user = new userDB({
        name: req.body.name,
        firstname: req.body.firstname,
        email: req.body.email,
        phone: req.body.phone,
        sexe: req.body.sexe,
        status: req.body.status
    })

    //save user in de database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            restart.status(500)
                .send({
                    message: err.message || "some error occured while creating a create opreation"
                })
        })

}

//Find all users/one user
exports.find = (req, res) => {

}

//Update user 
exports.update = (req, res) => {

}

// Delete user 
exports.delete = (req, res) => {

}