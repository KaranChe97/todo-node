const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
require("dotenv").config();
const todoController = require("./controllers/todo.controller");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.get("/todos", todoController.getAllTodos);

app.post("/todos", todoController.createTodo);

app.put("/todos/:id", todoController.updateTodo);

app.delete("/todos/:id", todoController.deleteTodo);

app.delete("/todos", todoController.clearTodos);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
