const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(PORT, () => console.log("API is running  "));
