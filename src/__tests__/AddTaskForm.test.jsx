import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm';

test('5. AddTaskForm - kutsub onAdd kui vormi esitatakse', () => {
  const mockAdd = jest.fn();
  render(<AddTaskForm onAdd={mockAdd} />);

  const input = screen.getByPlaceholderText('Add to-do');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(mockAdd).toHaveBeenCalledWith('New Task');
});

test('6. Veateade - tühja sisendiga ei lisata ja kuvatakse hoiatus', () => {
  const mockAdd = jest.fn();
  render(<AddTaskForm onAdd={mockAdd} />);

  const button = screen.getByText('Add');
  fireEvent.click(button);

  expect(mockAdd).not.toHaveBeenCalled();
  expect(screen.getByRole('alert')).toHaveTextContent('Sisesta midagi!');
});
