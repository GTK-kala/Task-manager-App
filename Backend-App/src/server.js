import express from 'express'

const port = 3001;

export const app = express();

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}!!`)
});
