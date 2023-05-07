const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.status(200).json({status:"success"});
});

app.listen(3000, () => console.log("App start listening on port 3000"));
