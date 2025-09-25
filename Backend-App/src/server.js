import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'


const port = 3001;
export const app = express();

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}!!`)
});
