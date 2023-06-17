const express = require("express");
const route = express.Router();
const {isValidID, isValidTaskBody }= require ("../helper/validation");
const { getAllTask, getTaskBYID, createTask, updateTaskByID, deleteTaskByID, patchTaskByID } = require("../service/task.service")

route.get("/", async (req, res) => {
    try {
        const data = await getAllTask();
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

route.get("/:id", isValidID, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getTaskBYID(id);
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

route.post("/", isValidTaskBody, async (req, res) => {
    try {
        const {task, user_id} = req.body;
        const data = await createTask(task, user_id);
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

route.put("/:id", isValidID, isValidTaskBody, async (req, res) => {
    try {
        const {id} = req.params;
        const {task, user_id} = req.body;
        const data = await updateTaskByID(id, task, user_id);
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

route.delete("/:id",isValidID, async (req, res) => {
    try {
        const {id} = req.params;
        const data = await deleteTaskByID(id);
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

route.patch("/:id", isValidID, async (req, res) => {
    try {
        const {id} = req.params;
        const clientData = req.body;
        const data = await patchTaskByID(id, clientData);
        res.send(data);
    } catch (err) {
        res.status(404).send(err.message)
    }
});

module.exports = route;