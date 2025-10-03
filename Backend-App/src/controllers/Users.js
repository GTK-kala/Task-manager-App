import { users } from '../Data/Data.js'

// display all users
export const DisplayUsers = (req,res) =>{
   res.status(200).json(users);
};


// display one users using id
export const DisplayUser = (req,res) =>{
   const id = parseInt(req.params.id);
    let user = users.find(user => user.id === id);
    if(!user){
      return res.status(400).json({
        message : `User not Found with this id ${id}`
      });
    };
    res.status(200).json(user);
};


// Display some of users data using id
export const DisplayUserlimit = (req,res) =>{
   const limit = req.query.limit;
   if(!users){
     return res.status(400).json({
       message : 'Fill the id!!!'
      });
    };
    let user = users.slice(0, limit);
    res.status(200).json(user);
};


// Adding user to the Data
export const AddUsers = (req, res) => {
  const user = {
    id: users.length,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  if (!req.body) {
    res.status(400).json({
      message: "please full fill the requirements",
    });
  };

  users.push(user);

  res.status(200).json(users);
};


// update user info
export const upDateUser = (req, res) => {
  const  name  = req.body.name;
  const id = parseInt(req.params.id);
  let new_user = users.find((user) => user.id === id);
    if (!req.body) {
      res.status(400).json({
        message: "please full fill the requirements"
      });
    };
    new_user.name = name;
  res.status(201).json(new_user);
};


// Delete user from the Database
export const DeleteUser = (req,res) =>{
    const id = parseInt(req.params.id);
    const  message = `user with this id ${id} is Deleted !!!}`
    let New_User = users.filter(user => user.id !== id);
        if (!req.params) {
      res.status(400).json({
        message: "please full fill the requirements"
      });
    };
    res.status(201).json(New_User);
    console.log(message);
};