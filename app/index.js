const express = require("express");
const app = express();
const routehandler = require("./routes");

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is runnning", sucess: true });
});

app.use("/api/v1", routehandler);

module.exports = app;
