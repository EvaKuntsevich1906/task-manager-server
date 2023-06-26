const {createUserDB, getUserByEmailDB} = require("../repository/api.repository");
const bcrypt = require("bcrypt");

const salt = 2;

const createUser = async (name, surname, email, pwd) => {
    const foundUser = await getUserByEmailDB(email);
    if(foundUser.length) throw new Error ("Такой User ужу есть");
     const hashedPassword = await bcrypt.hash(pwd, salt)
    const data =  await createUserDB(name,surname, email, hashedPassword);
    return data;
}

const getUserByEmail = async (email) => {
    const data = getUserByEmailDB(email);
    return data;
}

const authorazationUser = async (email, pwd) => {
    const foundUser = await getUserByEmailDB(email);
    if (!foundUser.length) throw new Error("Пользотель не найден");
    
    const bool = await bcrypt.compare(pwd, foundUser[0].pwd);
    if(!bool) throw new Error ("Пароли не совпадают"); 
    return foundUser
}


module.exports = {createUser, getUserByEmail, authorazationUser}