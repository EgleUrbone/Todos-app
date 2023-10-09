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
  const [todos, setTodos] = useState(initTodos);

  function newTodo(newTodoVal) {
    return { id: Date.now(), title: newTodoVal, done: false };
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

  function handleToggleDone(id) {
    console.log('toggle done', id);
    const updatedTodos = todos.map((tObj) => {
      if (tObj.id === id) {
        return { ...tObj, done: true };
      }
      return tObj;
    });
    setTodos(updatedTodos);
    console.log('updatedTodos ===', updatedTodos);
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
        {todos.map((tObj) => (
          <TodoItem
            key={tObj.id}
            {...tObj}
            done={tObj.done}
            toggleDone={() => handleToggleDone(tObj.id)}
          />
        ))}
      </ul>
    </>
  );
}
