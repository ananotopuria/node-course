const express = require("express");

const app = express();
app.use(express.json());

let users = [];
let id = 1;

function validateUser(req, res, next) {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({
      message: "name and age are required",
    });
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({
      message: "Age must be between 10 and 30",
    });
  }
  next();
}

function checkSecret(req, res, next) {
  const secret = req.headers.secret;
  if (secret !== "12345") {
    return res.status(403).json({
      message: "Forbidden: wrong secret",
    });
  }
  next();
}

app.post("/users", validateUser, (req, res) => {
  const { name, age, email, eyecolor } = req.body;
  const newUser = {
    id: id++,
    name,
    age,
    email,
    eyecolor,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const take = Number(req.query.take) || 5;
  const start = (page - 1) * take;
  const end = start + take;
  const paginatedUsers = users.slice(start, end);
  res.json({
    page,
    take,
    total: users.length,
    data: paginatedUsers,
  });
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

app.put("/users/:id", validateUser, (req, res) => {
  const userId = Number(req.params.id);
  const { name, age, email, eyecolor } = req.body;
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = name;
  user.age = age;
  user.email = email;
  user.eyecolor = eyecolor;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    message: "User deleted",
    user: deletedUser[0],
  });
});

app.get("/secret", checkSecret, (req, res) => {
  res.json({
    message: "Welcome to secret route",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
