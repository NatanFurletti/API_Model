const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
  ];
  res.status(200).json(users);
});
app.get("/users", (req, res) => {
  res.status(200).send("Welcome to the Home Page!");
});
const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
