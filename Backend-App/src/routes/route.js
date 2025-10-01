import express from "express";
import {
  DisplayUsers,
  DisplayUser,
  DisplayUserlimit,
  AddUsers,
  upDateUser,
  DeleteUser,
} from "../controllers/user.js";

const route = express.Router();

route.get("/users", DisplayUsers);
route.get("/users/:id", DisplayUser);
route.get("/users", DisplayUserlimit);
route.post("/users", AddUsers);
route.put("/users/:id", upDateUser);
route.delete("/users/:id", DeleteUser);

export default route;
