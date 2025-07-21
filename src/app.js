const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

app.use(morgan("dev"));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

const userRouter = require("./routes/user.routes");

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

module.exports = app;
