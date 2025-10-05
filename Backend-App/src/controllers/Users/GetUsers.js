import  connection  from "../../config/db.js";

// GET ALL USERS FROM THE DATABASE
export const GetUsers = (req, res) => {
  let sql = "SELECT * FROM users";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error retrieving users",
      });
    } else {
      res.status(200).json({
        result: result,
      });
    }
  });
};
