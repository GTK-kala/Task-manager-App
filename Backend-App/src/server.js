import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import AccountRouter from "./routes/accountRoutes.js";

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use("/api/users", AccountRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}!!`);
});
