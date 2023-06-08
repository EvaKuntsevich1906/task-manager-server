const pool = require("../db");

const getAllTaskDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM tasks`;
    const result = (await client.query(sql)).rows;
    return result;
};


const createTaskDB = async (task, user_id) => {
    const client = await pool.connect();
    const sql = `INSERT INTO tasks VALUES($1, $2) RETURNING*`;
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
};


module.exports = {getAllTaskDB, createTaskDB};