import React from 'react';
import '../styles/main.scss'

const TodoItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'tomato' : 'black'
  };  

  return (
    <div className="item">
      <span style={style}>{ label }</span>
      <div className="item__btns">
        <a className="item__icon" href="#">
          <i className="fas fa-trash-alt"></i>
        </a>
        <a className="item__icon" href="#">
          <i className="fas fa-exclamation"></i>
        </a>
      </div>
    </div>
    
  )
};

export default TodoItem;