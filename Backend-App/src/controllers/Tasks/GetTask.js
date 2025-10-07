import connection from "../../config/db.js";

// Get a task by its ID
export const GetTask = (req, res) => {
  const { user_id, task_id } = req.params;
  const query = "SELECT * FROM tasks WHERE task_id = ? AND user_id = ? ";
  connection.query(query, [user_id, task_id], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Database query error",
      });
    }
    if (results.length === 0) {
      return res.status(404).json({
        error: "Task not found",
      });
    }
    res.status(200).json({
        message: "Task retrieved successfully",
        task: results,
    });
  });
};
