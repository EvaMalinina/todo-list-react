import React, { Component } from 'react';

export default class AddForm extends Component {

  render() {

    // const { onAdd } = this.props;

    return (
      <div className="add">
        <button 
          className="add__btn"
          onClick={() => this.props.onAdd('Hello!') }
        >Add task</button>
      </div>
    )
  }
};