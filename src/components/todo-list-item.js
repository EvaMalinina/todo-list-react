import React, { Component } from 'react';
import '../styles/main.scss'

export default class TodoItem extends Component {

  constructor() {
    super();

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
    };

    this.onMarkImportant = (e) => {
      e.preventDefault();
      this.setState({
        important: true
      });
    };

    this.state = {
      done: false,
      important: false
    };
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    // const style = {
    //   color: important ? 'tomato' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };  

    return (
      <div className={ classNames }>
        <span onClick={ this.onLabelClick } >{ label }</span>
        <div className="item__btns">
          <a href="google.com" className="item__icon">
            <i className="fas fa-trash-alt"></i>
          </a>
          <a href="google.com" 
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
