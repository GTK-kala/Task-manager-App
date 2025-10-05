import  connection  from "../../config/db.js";

// ADD A NEW TASK TO THE DATABASE

export const AddTask = (req, res) => {
  const { user_id, title, description, status } = req.body;
  let sql =
    "INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)";
  connection.query(
    sql,
    [user_id, title, description, status],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(201).json({
        message: "Task added successfully",
        result: result,
      });
    }
  );
};
