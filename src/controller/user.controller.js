const express = require("express"); 
const route  = express.Router();
const {getAllUser, getUserByID, createUser, updateUserByID, deleteUserByID} = require("../service/user.service")

route.get("/", (req,res) => {
    res.send("ok")  //тестовый роут 
})

route.get("/", async (req, res) => {
    try {
       const data =  await getAllUser(); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.get("/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const data =  await getUserByID(id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.post("/", async (req, res) => {
    try {
       const {name, surname, email, pwd} = req.body;
       const data =  await createUser(name, surname, email, pwd); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.put("/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const {name, surname, email, pwd} = req.body;
       const data =  await updateUserByID(name, surname, email, pwd, id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.delete("/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const data =  await deleteUserByID(id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

module.exports = route;