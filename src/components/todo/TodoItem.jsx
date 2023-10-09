import React from 'react'

export default function TodoItem(props) {
  return (
    <li>
      <p>{props.title}</p>
      <button>DELETE</button>
    </li>
  )
}
