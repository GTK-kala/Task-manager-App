import connection from "../config/db.js";

const Register = (req, res) => {
  try {
    const { name, email, password } = req.body;
    const check_sql = `SELECT
            email
        FROM
            users
        WHERE
            email = ?`;
    connection.query(check_sql, [email], (error, results) => {
      if (error) {
        res.status(500).json({
          message: "Internal server error",
        });
      } else {
        if (results.length > 0) {
          res.status(409).json({
            message: "Email already exists",
          });
        } else {
          const insertSql = `INSERT INTO
                    users (name, email, password_hash)
                VALUES
                    (?, ?, ?)`;
          connection.query(
            insertSql,
            [name, email, password],
            (error, results) => {
              if (error) {
                res.status(500).json({
                  message: "Internal server error",
                });
              } else {
                res.status(201).json({
                  message: "User registered successfully",
                });
              }
            },
          );
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const Login = (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = `SELECT
            *
        FROM
            users
        WHERE
            email = ? AND password_hash = ?`;

    connection.query(sql, [email, password], (error, results) => {
      if (error) {
        res.status(500).json({
          message: "Internal server error",
        });
      } else {
        if (results.length > 0) {
          res.status(200).json({
            message: "Login successful",
            user: results[0],
          });
        } else {
          res.status(401).json({
            message: "Invalid email or password",
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { Register, Login };
