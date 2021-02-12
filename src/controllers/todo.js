/**
 * Todo controller : All business logic goes here
 */
const Todo = require("../models/todo");

/**
 * this method is to create the todo
 */
exports.createTodo = (req, res) => {
  /**
   * validation request
   */
  if (!req.body.description) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  /**
   * Create a todo
   */
  const todo = new Todo({
    description: req.body.description,
  });
  /**
   * Save todo to database
   */
  todo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    });
};

/** 
 * Find all Todos
 */
exports.getAllTodos = (req, res) => {
  Todo.find()
    .sort({ name: -1 })
    .then((todos) => {
      res.status(200).send(todos);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};

/**
 * Find one Todo
 */
exports.getTodo = (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: "Todo not found with id " + req.params.id,
        });
      }
      res.status(200).send(todo);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving todo with id " + req.params.id,
      });
    });
};

/**
 * Delete a todo with the specified id in the request
 */
exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: "Todo not found ",
        });
      }
      res.send({ message: "Todo deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete todo ",
      });
    });
};

/**
 * Update a todo with the specified id in the request
 */
exports.updateTodo = (req, res) => {
  if (!req.body.description) {
    res.status(400).send({
      message: "required fields cannot be empty",
    });
  }
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: "no todo found",
        });
      }
      res.status(200).send(todo);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the todo",
      });
    });
};
