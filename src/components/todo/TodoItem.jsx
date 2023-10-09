import './todoItem.scss';

export default function TodoItem(props) {

  return (
    <li className='liItem'>
      <p onClick={props.toggleDone} className={props.done  ? 'done' : ''}>{props.title}</p>
      <button>DELETE</button>
    </li>
  );
}
