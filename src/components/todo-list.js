import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) =>{

    const { id, ...itemPros } = item;

    return (
      <li key={ id } className="list__item">
        <TodoListItem 
          {...itemPros} 
          onDeleted={() => onDeleted(id)}
          // onAdd={() => onAdd(item)} 
        />
      </li>
    );
  });

  return (
    <ul className="list">
      { elements }
    </ul>
  )
}

export default TodoList;