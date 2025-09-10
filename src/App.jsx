import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './app.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      todo: taskText,
      done: false,
    };
    setTodos((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h2>Minu To-Do Rakendus</h2>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList
        todos={todos}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
