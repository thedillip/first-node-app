const express = require("express");
const employeeData = require("./employeedata");
const port = 5000;

const app = express();

app.get("/employee", (req, res) => {
  console.log(process.argv[2]);
  res.send(employeeData);
});

app.listen(port, () => {
  console.log(`Express Server Listening on port number ${port}`);
});
