import express from "express";
import usersRouter from "./routes/users";

const app = express(); 

app.use(express.json());

app.use("/users", usersRouter);

app.get('/', (req, res) => {
  res.send({
    status: "ok",
    code: 200,
    message: "Link.me API is running",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});