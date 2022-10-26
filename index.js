const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();
const port = 3600;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const users = await User.find();
  if (users.length > 0) res.send(users);
});

app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
