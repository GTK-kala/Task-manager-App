import { tasks } from "../Data/Data.js";

// Display all Tasks
export const DisplayTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Display One Task using id
export const DisplayTask = (req, res) => {
  const id = parseInt(req.params.id);
  let Task = tasks.find((task) => task.user_id === id);
  if (id < 0 || id > tasks.length) {
    return res.status(400).json({
      message: `Task with this id ${id} is not found!`,
    });
  }
  res.status(200).json(Task);
};

// Display some Tasks from the Database
export const SomeTasks = (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log(limit);
  let Tasks = tasks.slice(0, limit);
  if (limit <= 0 || limit > tasks.length) {
    return res.status(400).json({
      message: `Task with this id ${id} is not found!`,
    });
  }
  res.status(200).json(Tasks);
};
