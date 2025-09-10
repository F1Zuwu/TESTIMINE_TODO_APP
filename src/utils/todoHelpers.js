export const addTask = (todos, newTask) => [...todos, newTask];

export const removeTask = (todos, id) => todos.filter(todo => todo.id !== id);

export const toggleTask = (todos, id) =>
  todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
