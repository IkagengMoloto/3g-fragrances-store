const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

const USERS_FILE = "./users.json";

function getUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, "[]");
  }

  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

/* SIGNUP */
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const users = getUsers();

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  saveUsers(users);

  res.json({
    message: "Signup successful",
  });
});

/* LOGIN */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("3G Fragrances Backend Running");
});

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});

function verifyAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const users = getUsers();
    const user = users.find((u) => u.id === decoded.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.get("/api/admin/users", verifyAdmin, (req, res) => {
  const users = getUsers().map(({ password, ...user }) => user);
  res.json(users);
});

app.delete("/api/admin/users/:id", verifyAdmin, (req, res) => {
  const users = getUsers();
  const filteredUsers = users.filter((u) => u.id !== Number(req.params.id));

  saveUsers(filteredUsers);

  res.json({ message: "User deleted successfully" });
});

app.patch("/api/admin/users/:id/reset-password", verifyAdmin, async (req, res) => {
  const { password } = req.body;

  const users = getUsers();
  const user = users.find((u) => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.password = await bcrypt.hash(password, 10);
  saveUsers(users);

  res.json({ message: "Password reset successfully" });
});