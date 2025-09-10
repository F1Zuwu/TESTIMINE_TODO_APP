import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('4. TaskList - renderdab õiged ülesanded', () => {
  const todos = [
    { id: '1', todo: 'Task 1', done: false },
    { id: '2', todo: 'Task 2', done: true },
  ];

  render(<TaskList todos={todos} onToggle={() => {}} onDelete={() => {}} />);
  
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});
