import express from "express";

// Users
import { AddUser } from "../controllers/Users/AddUser.js";
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
// Tasks
import { AddTask } from "../controllers/Tasks/AddTask.js";


const route = express.Router();

// USERS ROUTES
route.get("/users/:id", GetUser);
route.get("/users", GetUsers);
route.post("/users/new", AddUser);

// TASKS ROUTES
route.post("/tasks/new", AddTask);

export default route;
