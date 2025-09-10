import '../app.css'

export default function TaskList({ todos, onToggle, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          <span className={todo.done ? 'done' : ''}>{todo.todo}</span>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            X
          </button>
        </li>
      ))}
    </div>
  );
}
