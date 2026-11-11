import express from "express";
import { Register, Login } from "../controllers/account.js";

const AccountRouter = express.Router();

AccountRouter.post("/login", Login);
AccountRouter.post("/register", Register);

export default AccountRouter;
