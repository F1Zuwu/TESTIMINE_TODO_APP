import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      setError('Sisesta midagi!');
      return;
    }

    onAdd(value.trim());
    setValue('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add to-do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <div role="alert">{error}</div>}
    </form>
  );
}
