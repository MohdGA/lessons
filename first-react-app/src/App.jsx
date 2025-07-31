const App = () => {
  const todo = { text: 'A brand new task', done: true };
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];
  const todoList = todos.map((todo, index) =>
    <li key={index}>{todo.text}</li>
  )
  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>
      <h2>Conditional Rendering</h2>
      <p>
        {todo.done ? 'Task Completed: ' + todo.text : todo.text}
      </p>
      <h2>Looping with JSX</h2>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>{todo.text}</li>
        )}
      </ul>
      <ul>
        {todoList}
      </ul>
      <ul>
        {todos.map((todo, index) =>
        <li key={index}>{todo.done ? `Task Completed: ${todo.text}` : todo.text}</li>
        )}
      </ul>
    </>
  );
};
export default App;