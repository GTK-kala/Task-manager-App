import connection from "../../config/db.js";

// Update a task by its ID
export const UpdateTask = (req, res) => {
    const { user_id, task_id } = req.params;
    const { title, description, status } = req.body;
    const query = "UPDATE tasks SET title = ?, description = ?, status = ? WHERE task_id = ? AND user_id = ?";
    connection.query(query, [title, description, status, task_id, user_id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Database query error",
            });
        };
        if (results.affectedRows === 0) {
            return res.status(404).json({
                error: "Task not found or no changes made",
            });
        };
        res.status(200).json({
            message: "Task updated successfully",
            task: { task_id, user_id, title, description, status },
        });
    });

};