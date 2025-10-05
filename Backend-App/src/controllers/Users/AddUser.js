import connection from "../../config/db.js";

// ADD USERS TO THE DATABASE
export const AddUser = (req, res) => {
  
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      message: "please full fill the requirements",
    });
  };

  let sql = "INSERT INTO users (username , email , password) VALUE (? , ? , ?)";
  connection.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Error adding user",
      });
    } else {
      res.status(200).json({
        message: "User Added",
        result: result,
      });
    }
  });
};
