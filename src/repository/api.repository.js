const pool = require("../db");

const  createUserDB = async (name, surname, email, pwd) => {
const client = await pool.connect();
const sql = `INSERT INTO users(name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING* `
const data = (await client.query(sql, [name, surname, email, pwd])).rows;
return result; 
}


const getUserByEmailBD = async (email) => {
const client = await pool.connect();
const sql = `SELECT * FROM users WHERE email = $1`;
const data = (await client.query(sql, [email])).rows;
return data; 
}

module.exports = {createUserDB, getUserByEmailBD}

