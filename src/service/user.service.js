const {getAllUserDataDB, getUserDataByIDDB, createUserDataDB} = require("../repository/user.repository");


const getAllUserData = async () => {
  const data = await getAllUserDataDB();
  return data;
};

const getUserDataByID = async (id) => {
  const data = await getUserDataByIDDB(id);
  return data;
};

const createUserData = async (name, surname, email, pwd) => {
  const data = await createUserDataDB (name, surname, email, pwd);
  return data;
};


module.exports = {getAllUserData, getUserDataByID, createUserData};