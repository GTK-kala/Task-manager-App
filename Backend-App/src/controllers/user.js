export const AddUsers  = (req , res) =>{
   const {name , email , password} = req.body;
    if(!req.body){
        res.status(400).json({
            message : 'please full fill the requirements'
        })
    };
    res.status(200).json({
        name : name,
        email : email,
        password : password
    });
    console.log('name =' + name);
    console.log('email =' + email);
    console.log('password =' + password);
};