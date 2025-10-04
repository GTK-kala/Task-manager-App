// import { tasks } from "../Data/Data.js";

// // Display all Tasks
// export const DisplayTasks = (req, res) => {
//   res.status(200).json(tasks);
// };

// // Display One Task using id
// export const DisplayTask = (req, res) => {
//   const id = parseInt(req.params.id);
//   let Task = tasks.find((task) => task.user_id === id);
//   if (id < 0 || id > tasks.length) {
//     return res.status(400).json({
//       message: `Task with this id ${id} is not found!`,
//     });
//   }
//   res.status(200).json(Task);
// };

// // Display some Tasks from the Database
// export const SomeTasks = (req, res) => {
//   const limit = req.query.limit;
//   if (limit <= 0 || limit > tasks.length) {
//     return res.status(400).json({
//       message: `Task with this id ${id} is not found!`,
//     });
//   }
//   let Tasks = tasks.slice(0, limit);
//   res.status(200).json(Tasks);
// };

// // ADDING NEW Tasks using POST Route
// export const AddTasks = (req, res) => {
//   const New_Task = {
//     title: req.body.title,
//     description: req.body.description,
//     status: req.body.status,
//     user_id: tasks.length,
//   };
//   if (!New_Task) {
//     return res.status(400).json({
//       message: "please full fill the requirements",
//     });
//   }
//   tasks.push(New_Task);
//   res.status(200).json(tasks);
//   console.log("Data Added Successfully");
// };

// // UPDATE Tasks using PUT Route
// export const upDateTask = (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, description, status } = req.body;
//   let Task = tasks.find((task) => task.user_id === id);
//   if (id < 0 || id > tasks.length) {
//     return res.status(400).json({
//       message: `Task with this id ${id} is not found!`,
//     });
//   }
//   if (title || description || status) {
//     Task.title = title;
//     Task.description = description;
//     Task.status = status;
//   }
//   res.status(200).json(tasks);
//   console.log("Data Updated Successfully");
// };


// // DELETE Tasks using DELETE Route
// export const DeleteTask = (req, res) => {
//   const id = parseInt(req.params.id);
//   let Task = tasks.filter((task) => task.user_id !== id);
//   if (id < 0 || id > tasks.length) {
//     return res.status(400).json({
//       message: `Task with this id ${id} is not found!`,
//     });
//   };
//   res.status(200).json(Task);
//   console.log("Data Deleted Successfully");
// };