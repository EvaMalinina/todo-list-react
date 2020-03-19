import React, { Component } from 'react';
import '../styles/main.scss'

export default class TodoItem extends Component {

  render() {
    const { label, onDeleted, 
            onToggleImportant, onToggleDone,
            done, important} = this.props;

    let classNames = 'item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    } 

    return (
      <div className={ classNames }>
        <span onClick={ onToggleDone } >{ label }</span>
        <div className="item__btns">
          <a href="#1" 
            className="item__icon"
            onClick={ onDeleted }
          >
            <i className="fas fa-trash-alt"></i>
          </a>
          <a href="#2" 
            className="item__icon"
            onClick={ onToggleImportant }
          >
            <i className="fas fa-exclamation"></i>
          </a>
        </div>
      </div> 
    )
  }
};
