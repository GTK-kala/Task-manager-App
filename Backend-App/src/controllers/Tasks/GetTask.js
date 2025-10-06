import connection from '../../config/db.js';

// Get a task by its ID
export const GetTask = (req, res) =>{
   const taskId = parseInt(req.params.id);
//    const userId = req.user.id;
   const query = 'SELECT * FROM tasks WHERE task_id = ?';
    connection.query(query, [taskId], (err, results) => {
        if(err){
            return res.status(500).json({ error: 'Database query error' });
        };
        if(results.length === 0){
            return res.status(404).json({ error: 'Task not found' });
        };
        res.status(200).json(results[0]);
    })
}