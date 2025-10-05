import express from "express";

// Users
import { AddUser } from "../controllers/Users/AddUser.js";
import { GetUser } from "../controllers/Users/GetUser.js";


const route = express.Router();

route.get("/users/:id", GetUser);
route.post("/users/new", AddUser);


export default route;
