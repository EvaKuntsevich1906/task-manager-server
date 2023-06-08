const express = require("express");
const route = express.Router(); 
const {getAllTask, createTask} = require("../service/task.service")

route.get("/", async (req, res) => {
    try {
       const data =  await getAllTask(); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

route.post("/", async (req, res) => {
    try {
       const {task, user_id} = req.body;  
       const data =  await createTask(task, user_id); 
       res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
}); 

module.exports = route;