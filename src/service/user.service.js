const {getAllUserDB, getUserByIDDB, createUserDB, updateUserByIDDB, deleteUserByIDDB, patchUserByIDDB} = require("../repository/user.repository");


const getAllUser = async () => {
  const data = await getAllUserDB();
  return data;
};

const getUserByID = async (id) => {
  const data = await getUserByIDDB(id);
  return data;
};

const createUser = async (name, surname, email, pwd) => {
  const data = await createUserDB (name, surname, email, pwd);
  return data;
};

const updateUserByID = async (name, surname, email, pwd, id) => {
  const data = await updateUserByIDDB (name, surname, email, pwd,id);
  return data;
};

const deleteUserByID = async (id) => {
  const data = await deleteUserByIDDB (id);
  return data;
};

const patchUserByID = async (id) => {
  const data = await patchUserByIDDB(id);
  return data;
};


module.exports = {getAllUser, getUserByID, createUser, updateUserByID, deleteUserByID, patchUserByID };