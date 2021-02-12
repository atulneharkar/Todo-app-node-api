const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo");

router.get("/", todo.getAllTodos);
router.post("/", todo.createTodo);
router.get("/:id", todo.getTodo);
router.put("/:id", todo.updateTodo);
router.delete("/:id", todo.deleteTodo);

module.exports = router;