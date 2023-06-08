const pool = require("../db");

const getAllUserDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;

};


const getUserByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;  
};

const createUserDB = async (name, surname, email, pwd) => {
    const client = await pool.connect();
    try {

        await client.query("BEGIN");
    
        const sql = `INSERT INTO users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *`;
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query("COMMIT");

        return result;
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(`createUserData: ${err.message}`);
        return null;
    }
};

const updateUserByIDDB = async (name, surname, email, pwd,id) => {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
    
        const sql = `UPDATE users set name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 returning *`;
        const result = (await client.query(sql, [name, surname, email, pwd,id])).rows;

        await client.query("COMMIT");

        return result;
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(`updateUserDataByIDDB: ${err.message}`);
        return null;
    }
}

const deleteUserByIDDB = async (id) => {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
    
        const sql = `DELETE  FROM users WHERE id = $1 returning *`;
        const result = (await client.query(sql, [id])).rows;

        await client.query("COMMIT");

        return result;
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(`updateUserDataByIDDB: ${err.message}`);
        return null;
    }
}
module.exports = {
    getAllUserDB,
    getUserByIDDB,
    createUserDB,
    updateUserByIDDB,
    deleteUserByIDDB
};