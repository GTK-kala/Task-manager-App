import express from "express";

// Users
import { AddUser } from "../controllers/Users/AddUser.js";
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";


const route = express.Router();

route.get("/users/:id", GetUser);
route.get("/users", GetUsers);
route.post("/users/new", AddUser);


export default route;
