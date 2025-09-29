const user  = [];

export const AddUsers  = (req , res) =>{
   const {name , email , password} = req.body;
   let id = user.length;
   
    if(!req.body){
        res.status(400).json({
            message : 'please full fill the requirements'
        })
    };
    user.push()
    res.status(200).json({
        name : name,
        email : email,
        password : password
    });
   
};

export const upDateUser = (req,res) =>{
  
}