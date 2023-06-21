const {createUserDB, getUserByEmailBD} = require("../repository/api.repository")


const createUser = async (name, surname, email, pwd) => {
    const data = createUserDB(name,surname, email, pwd);
    return data
}

const getUserByEmail = async (email) => {
    const data = getUserByEmailBD(email);
    return data
}


module.exports = {createUser, getUserByEmail}