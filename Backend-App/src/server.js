import express from 'express'
import route from './routes/route.js';

const port = 3001;
const app = express();

 app.use(express.json());
 app.use(express.urlencoded({
    extended: true
 }));

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}!!`)
});

app.use('/Users' , route);
