const {getAllUserDataDB, getUserDataByIDDB, createUserDataDB, updateUserDataByIDDB, deleteUserDataByIDDB} = require("../repository/user.repository");


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

const updateUserDataByID = async (name, surname, email, pwd, id) => {
  const data = await updateUserDataByIDDB (name, surname, email, pwd,id);
  return data;
};

const deleteUserDataByID = async (id) => {
  const data = await deleteUserDataByIDDB (id);
  return data;
};

module.exports = {getAllUserData, getUserDataByID, createUserData, updateUserDataByID, deleteUserDataByID };