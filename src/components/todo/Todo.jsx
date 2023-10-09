import { useState } from 'react';
import TodoItem from './TodoItem';

const initTodos = [
  { id: 1, title: 'Get Milk', done: false },
  { id: 2, title: 'Feed the Cat', done: true },
  { id: 3, title: 'Pet the dog', done: false },
];
console.log('initTodos ===', initTodos);

export default function Todo() {
  const [newTodoVal, setNewTodoVal] = useState('');

  function newTodo(newTodoVal) {
    return { id: Date.now(), title: newTodoVal, complete: false };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newValue = newTodo(newTodoVal);
    console.log('newValue ===', newValue);
    {
      initTodos.push(newValue);
    }
    setNewTodoVal('');
  }

  return (
    <>
      <h1>Your TO DO page</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add todo</legend>
          <input
            value={newTodoVal}
            onChange={(e) => setNewTodoVal(e.target.value)}
            type='text'
            placeholder='add todo'
          />
          <button type='submit'>Add</button>
        </fieldset>
      </form>
      <ul>
        {initTodos.map((tObj) => (
          <TodoItem key={tObj.id} {...tObj} />
        ))}
      </ul>
    </>
  );
}
