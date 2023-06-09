const pool = require("../db");

const getAllTaskDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM tasks`;
    const result = (await client.query(sql)).rows;
    return result;
};

const getTaskByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM tasks WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
    
}

const createTaskDB = async (task, user_id) => {
    const client = await pool.connect();
    const sql = `INSERT INTO tasks (task, user_id) VALUES($1, $2) RETURNING*`;
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
};

const updateTaskByIDDB = async (id, task, user_id) => {
    const client = await pool.connect();
    const sql = `UPDATE tasks set task = $2, user_id = $3 WHERE id = $1 returning *`;
    const result = (await client.query(sql, [id, task, user_id])).rows;
    return result;
};

const deleteTaskByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `DELETE FROM tasks WHERE id = $1 returning *`;
    const result = (await client.query(sql, [id])).rows;
    return result;
};

const patchTaskByIDDB = async (id, clientData) => {
    const client = await pool.connect();
    const sql1 = `SELECT * FROM tasks WHERE id = $1`;
    const result = (await client.query(sql1, [id])).rows;

    const merge = {...result[0], ...clientData};
    const sql2 = `UPDATE tasks set task = $2, user_id = $3 WHERE id = $1 returning *`;
    const patchData = (await client.query(sql2, [merge.task, merge.user_id, id])).rows;
    return patchData;
}

module.exports = {getAllTaskDB, getTaskByIDDB, createTaskDB, updateTaskByIDDB, deleteTaskByIDDB, patchTaskByIDDB};