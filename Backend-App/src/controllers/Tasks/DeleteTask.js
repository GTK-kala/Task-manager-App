import connection from "../../config/db.js";

// Delete Task Using user_id and task_id
export const DeleteTask = (req, res) => {
  const { user_id, task_id } = req.params;
  const sql = "DELETE FROM tasks WHERE user_id = ? AND task_id = ?";
  connection.query(sql, [user_id, task_id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
        error: err,
      });
    }
    if (!user_id || !task_id) {
      return res.status(400).json({
        message: "Please provide user_id and task_id",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.status(200).json({
      message: "Task Deleted Successfully",
      user_id,
      task_id,
    });
  });
};
