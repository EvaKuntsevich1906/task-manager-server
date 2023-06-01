const express = require("express"); 
const route  = express.Router();
const {getAllUserData, getUserDataByID, createUserData} = require("../service/user.service")

// route.get("/", (req,res) => {
//     res.send("ok")  - тестовый роут 
// })

route.get("/", async (req, res) => {
    try {
       const data =  await getAllUserData(); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.get("/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const data =  await getUserDataByID(id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.post("/:id", async (req, res) => {
    try {
       const {name, surname, email, pwd} = req.body;
       const data =  await createUserData(name, surname, email, pwd); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

module.exports = route;