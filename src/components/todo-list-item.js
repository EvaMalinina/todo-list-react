import React, { Component } from 'react';
import '../styles/main.scss'

export default class TodoItem extends Component {

  constructor() {
    super();

    this.onLabelClick = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        }
      });
    };

    this.onMarkImportant = (e) => {
      e.preventDefault();
      this.setState(({ important }) => {
        return {
          important: !important
        }
      });
    };

    this.state = {
      done: false,
      important: false
    };
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    } 

    return (
      <div className={ classNames }>
        <span onClick={ this.onLabelClick } >{ label }</span>
        <div className="item__btns">
          <a href="#1" 
            className="item__icon"
            onClick={ onDeleted }
          >
            <i className="fas fa-trash-alt"></i>
          </a>
          <a href="#2" 
            className="item__icon"
            onClick={ this.onMarkImportant }
          >
            <i className="fas fa-exclamation"></i>
          </a>
        </div>
      </div> 
    )
  }
};
