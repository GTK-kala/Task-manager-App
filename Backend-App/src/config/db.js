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

const createTableUser =`CREATE TABLE USERS(
                  user_id INT AUTO_INCREMENT PRIMARY KEY,
                  username VARCHAR(100) not null,
                  email VARCHAR(100) not null,
                  password VARCHAR(255) not null
                )`;
                connection.query(createTableUser, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Table created");
                    }
                });
const createTableTask =`CREATE TABLE TASKS(
                  task_id INT AUTO_INCREMENT PRIMARY KEY,
                  user_id INT,
                  title VARCHAR(100) not null,
                  description TEXT not null,
                  status ENUM('pending', 'in_progress', 'completed') not null,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                  FOREIGN KEY (user_id) REFERENCES USERS(user_id)
                )`;
                connection.query(createTableTask, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Table created");
                    }
                });

export default connection;