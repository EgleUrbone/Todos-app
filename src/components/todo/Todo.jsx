

const initTodos = [
  { id: 1, title: 'Get Milk', done: false },
  { id: 2, title: 'Feed the Cat', done: true },
  { id: 3, title: 'Pet the dog', done: false },
];

export default function Todo() {
  return (
    <>
      <div>Your TO DO page</div>
      <form>
        <fieldset>
          <legend>Add todo</legend>
          <input type='text' placeholder='add todo' />
          <button type='submit'>Add</button>
        </fieldset>
      </form>
    </>
  );
}
