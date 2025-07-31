const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Todo = require('./models/todo');

const createTodo = async () => {
  const formData = {
    text: "Mohd",
    isComplete: true,
    age: 24
  };

  const todo = await Todo.create(formData); // Create new database
  console.log(todo);
}

const findTodos = async () => {
  const todos = await Todo.find({}); // To find everything in my database
  console.log(todos)
};

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await runQueries()
    await mongoose.disconnect();
    
    console.log('Disconnected from MongoDB');
    process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
  // await createTodo();
  await findTodos();

};

connect()
