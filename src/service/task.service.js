const { getAllTaskDB, getTaskByIDDB,createTaskDB, updateTaskByIDDB,deleteTaskByIDDB, patchTaskByIDDB} = require("../repository/task.repository");

const getAllTask = async () => {
  const data = await getAllTaskDB();
  return data;
};

const getTaskBYID = async (id) => {
  const data = await getTaskByIDDB(id);
  return data;
};

const createTask = async (task, user_id) => {
  const data = await createTaskDB(task, user_id);
  return data;
};

const updateTaskByID = async (id, task, user_id) => {
  const data = await updateTaskByIDDB(id, task, user_id);
  return data;
};

const deleteTaskByID = async (id) => {
  const data = await deleteTaskByIDDB(id);
  return data;
};

const patchTaskByID = async (id, clientData) => {
  const data = await patchTaskByIDDB(id, clientData);
  return data;
};



module.exports = {getAllTask, getTaskBYID, createTask,updateTaskByID, deleteTaskByID, patchTaskByID };