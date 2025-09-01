import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'


const port = 3001;
const app = express();

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
});

app.get('/',(req,res) =>{
  res.send('hello this is express server');
});