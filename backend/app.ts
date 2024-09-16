import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

var usersRouter = require("./Routes/users.routes");

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
