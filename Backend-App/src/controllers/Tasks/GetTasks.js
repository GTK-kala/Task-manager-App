import connection from "../../config/db.js";

// Get all tasks
export const GetTasks = (req, res) =>{
     const sql = "SELECT * FROM tasks";
     connection.query(sql, (err, results) => {
         if (err) {
             return res.status(500).json({ error: err.message });
         }
         res.status(200).json({
             message: "Tasks retrieved successfully",
             results: results
         });
     });
}