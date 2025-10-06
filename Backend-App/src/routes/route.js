import express from "express";
import connection from "../config/db.js"

// Users
import { AddUser } from "../controllers/Users/AddUser.js";
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
// Tasks
import { AddTask } from "../controllers/Tasks/AddTask.js";

// Test API
// import { testApi } from "../Test/UserApi.js";

const route = express.Router();

// USERS ROUTES
route.get("/users/:id", GetUser);
route.get("/users", GetUsers);
route.post("/users/new", AddUser);

// TASKS ROUTES
route.post("/tasks/new", AddTask);

// TEST API
route.delete("/test/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM users WHERE user_id = ?";
    connection.query(sql , [id]  , (err , result) =>{
        if(err){
            return res.json({message: "Error in API"
            });
        };
      res.status(200).json({
        message : 'Data is Deleted Successfully',
      })
    })
});

route.put("/test/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const userName = req.body.userName;
    const sql = "UPDATE users SET username = ? WHERE user_id = ?";
    connection.query(sql , [userName , id]  , (err , result) =>{
        if(err){
            return res.json({message: "Error in API"
            });
        };
      res.status(200).json({
        message : 'Data is Updated Successfully',
        result : result
      })
    })
})

export default route;
