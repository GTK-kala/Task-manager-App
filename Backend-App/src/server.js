import cors from "cors";
import express from "express";
import AccountRouter from "./routes/accountRoutes.js";

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/users", AccountRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}!!`);
});
