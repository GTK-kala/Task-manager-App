export const DeleteUser = (req,res) =>{
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM users WHERE user_id = ?";
    connection.query(sql , [id]  , (err , result) =>{
        if(err){
            return res.json({message: "Error in API"
            });
        };
      res.status(200).json({
        message : 'Data is Deleted Successfully',
      });
    });
};