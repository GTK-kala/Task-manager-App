export const UpdateUser = (req, res) => {
  const { id } = req.params;
  const { name, email , password } = req.body;
  const query = "UPDATE users SET username = ?, email = ? , password = ? WHERE id = ?";
  connection.query(query, [name, email, password, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({
      message: "User updated successfully",
      result: result,
    });
  });
};
