import mysql2 from 'mysql2'

const connection = mysql2.createConnection({
    host:"localhost",
    user:'root',
    password:'12345',
    database:'taskmanager'
});

connection.connect((err) =>{
    if(err){
      console.log(err)
    }else{
      console.log('Database connected');
    }
});

export default connection;