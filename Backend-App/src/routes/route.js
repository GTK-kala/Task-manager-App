import express from "express";

// Users
import {
  DisplayUsers,
   DisplayUser,
  DisplayUserlimit,
  AddUsers,
  upDateUser,
  DeleteUser,
} from "../controllers/Users.js";

// Tasks
import { DisplayTasks , DisplayTask , SomeTasks , AddTasks} from "../controllers/Tasks.js";

const route = express.Router();

// Users Routes
route.get("/users", DisplayUsers);
route.get("/users/:id", DisplayUser);
route.get("/users/some", DisplayUserlimit);
route.post("/users/new", AddUsers);
route.put("/users/:id", upDateUser);
route.delete("/users/:id", DeleteUser);

// Tasks Routes
route.get("/tasks" , DisplayTasks);
route.get("/tasks/:id" , DisplayTask);
route.get("/tasks/some" , SomeTasks);
route.post("/tasks/new" , AddTasks)


export default route;
