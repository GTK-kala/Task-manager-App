import connection from "../../config/db.js";

// GET USERS FROM THE DATABASE
export const GetUser = (req, res) => {
  const userId = parseInt(req.params.id);
  let sql = "SELECT * FROM users WHERE user_id = ?";
  connection.query(sql, [userId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error retrieving user",
      });
    } else {
      res.status(200).json({
        message: "User retrieved",
        result: result[0], // send only one user
      });
    }
  });
};
