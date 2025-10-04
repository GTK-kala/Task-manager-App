import express from "express";

// Users
import { AddUsers } from "../controllers/Users.js";


const route = express.Router();


route.post("/users/new", AddUsers);


export default route;
