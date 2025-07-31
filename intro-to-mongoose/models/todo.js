const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
  age: Number
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;