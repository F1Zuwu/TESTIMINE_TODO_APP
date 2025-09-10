import { addTask, removeTask, toggleTask } from '../utils/todoHelpers';

describe('Todo helper functions', () => {
  const mockTodos = [
    { id: '1', todo: 'Task 1', done: false },
    { id: '2', todo: 'Task 2', done: false },
  ];

  test('1. addTask - lisab uue ülesande', () => {
    const newTask = { id: '3', todo: 'Task 3', done: false };
    const result = addTask(mockTodos, newTask);
    expect(result).toHaveLength(3);
    expect(result[2]).toEqual(newTask);
  });

  test('2. removeTask - eemaldab õige ülesande', () => {
    const result = removeTask(mockTodos, '1');
    expect(result).toHaveLength(1);
    expect(result.find(t => t.id === '1')).toBeUndefined();
  });

  test('3. toggleTask - muudab ülesande "done" staatust', () => {
    const result = toggleTask(mockTodos, '2');
    expect(result.find(t => t.id === '2').done).toBe(true);
  });
});
