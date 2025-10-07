import express from "express";

// Users
import { AddUser } from "../controllers/Users/AddUser.js";
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
import { UpdateUser } from "../controllers/Users/UpdateUser.js";
import { DeleteUser } from "../controllers/Users/DeleteUser.js";

// Tasks
import { GetTasks } from "../controllers/Tasks/GetTasks.js";
import { GetTask } from "../controllers/Tasks/GetTask.js";
import { AddTask } from "../controllers/Tasks/AddTask.js";
import { UpdateTask } from "../controllers/Tasks/UpDateTask.js";
import { DeleteTask } from "../controllers/Tasks/DeleteTask.js";


const route = express.Router();

// USERS ROUTES
route.get("/users/:id", GetUser);
route.get("/users", GetUsers);
route.post("/users/new", AddUser);
route.put("/users/update/:id", UpdateUser);
route.delete("/users/delete/:id", DeleteUser);

// TASKS ROUTES
route.get("/tasks", GetTasks);
route.get("/tasks/:user_id/:task_id", GetTask);
route.post("/tasks/new", AddTask);
route.put("/tasks/update/:user_id/:task_id", UpdateTask);
route.delete("/tasks/delete/:user_id/:task_id", DeleteTask);




export default route;
