import express from 'express';
import cors from "cors";
import route from './routes/route.js';

const port = 3001;
const app = express();

 app.use(cors());  
 app.use(express.json());
 app.use(express.urlencoded({
    extended: true
 }));

 app.use('/api' , route);

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}!!`)
});


