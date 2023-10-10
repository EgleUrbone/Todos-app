import { useState } from 'react';
import TodoItem from './TodoItem';
import './todo.scss';

const initTodos = [
  { id: 1, title: 'Get Milk', done: false },
  { id: 2, title: 'Feed the Cat', done: true },
  { id: 3, title: 'Pet the dog', done: false },
];
// console.log('initTodos ===', initTodos);

export default function Todo() {
  const [newTodoVal, setNewTodoVal] = useState('');
  const [todos, setTodos] = useState(initTodos);

  console.log('todos ===', todos);

  function newTodo(newTodoVal) {
    return { id: Date.now(), title: newTodoVal, done: false };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newValue = newTodo(newTodoVal);
    console.log('newValue ===', newValue);
    const updatedTodos = [...todos, newValue];
    setTodos(updatedTodos);
    // {
    //   initTodos.push(newValue);
    // }
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

  function handleDelete(id) {
    console.log('deletina');
    const updatedTodos = todos.filter((t0bj) => {
      return t0bj.id !== id;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className='container'>
      <h1 className='mainTitle'>Your TO DO page</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='fieldset'>
          <legend>Add todo</legend>
          <input
            value={newTodoVal}
            onChange={(e) => setNewTodoVal(e.target.value)}
            type='text'
            placeholder='add todo'
            className='inputField'
          />
          <button className='btn' type='submit'>Add</button>
        </fieldset>
      </form>
      <ul>
        {todos.map((tObj) => (
          <TodoItem
            key={tObj.id}
            {...tObj}
            done={tObj.done}
            toggleDone={() => handleToggleDone(tObj.id)}
            deleteThis={() => handleDelete(tObj.id)}
          />
        ))}
      </ul>
    </div>
  );
}
