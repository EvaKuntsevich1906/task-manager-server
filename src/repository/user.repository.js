const pool = require("../db");

const getAllUserDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;

};

const getUserDataByIDDB = async (id) => {
    const client = await pool.connect(id);
    const sql = `SELECT * FROM users WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
};

const createUserDataDB = async (name, surname, email, pwd) => {
    try {
        await client.query("BEGIN");

        const client = await pool.connect(name, surname, email, pwd);
        const sql = `INSERT INTO users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *`;
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query("COMMIT");

        return result;
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(`createUserData: ${err.message}`);
        return null;
    }
}

module.exports = {
    getAllUserDataDB,
    getUserDataByIDDB,
    createUserDataDB
};