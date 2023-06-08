const {
  getAllTaskDB,
  createTaskDB
} = require("../repository/task.repository");

const getAllTask = async () => {
  const data = await getAllTaskDB();
  return data;
};

const createTask = async (task, user_id) => {
  const data = await createTaskDB(task, user_id);
  return data;
};

module.exports = {
  getAllTask,
  createTask
}