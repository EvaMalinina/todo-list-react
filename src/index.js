import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import Panels from './components/panels';
import AddForm from './components/form-add';

import './styles/main.scss';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Create awesome app', important: true, id: 2},
      {label: 'Have lunch', important: false, id: 3}
    ]
  };

  deleteItem = (id) => {

    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      
      const newArr = [
        ...todoData.slice( 0, indx ),
        ...todoData.slice( indx + 1)
      ];

      return {
        todoData: newArr
      }
      
    })
  };

  addItem = (text) => {
    
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    })
  };

  onToggleImportant = (id) => {
    console.log(id, 'important');
  };

  onToggleDone = (id) => {
    console.log(id, 'done');
  };
  
  render() {
    return (
      <div className="wrapper">
        <AppHeader/>
        <Panels/>
        <TodoList 
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
          onAdd={ this.addItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />
        <AddForm onAdd={ this.addItem}/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
