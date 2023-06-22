const express = require("express"); 
const {createUser} = require("../service/api.service")
const route = express.Router();

route.post("/reg", async (req, res) => {
    try {
       const {name, surname, email, pwd} = req.body;
       const data =  await createUser(name, surname, email, pwd);
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});


route.post("/auth", async (req, res) => {
    try {
       const {email, pwd} = req.body;
       const data =  await authorazationUser (email, pwd);
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

module.exports = route;