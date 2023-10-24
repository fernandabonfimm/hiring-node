require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.listen(3010, () => {
  console.log("Servidor rodando na porta 3010");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const stockRoutes = require("./src/routes/stock.routes");
app.use("/", stockRoutes);

module.exports = app;
