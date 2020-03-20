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
      this.createItem('Drink Coffee'),
      this.createItem('Create awesome app'),
      this.createItem('Have lunch')
    ],
    inptToSearch: '',
    filter: 'all'//all, active, done
  };

  createItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
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
    
    const newItem = this.createItem(text);

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

  onSearchChange = ( inptToSearch ) => {
    this.setState({ inptToSearch });
  };

  onFilterChange = ( filter ) => {
    this.setState({ filter });
  };

  searchItem( items, inptToSearch ) {
    if (inptToSearch.length === 0) {
      return items;
    };

    return items.filter((item) => {
      return item.label.indexOf(inptToSearch) > -1;
    });
  };

  filterItem( items, filter ) {

    switch(filter) {
      case('all'): return items;
      case('active'): return items.filter((item) => !item.done);
      case('done'): return items.filter((item) => item.done);
      default: return items;
    };
  };

  toggleProperty( arr, id, propName) {
    const indx = arr.findIndex((el) => el.id === id);

      const oldTodoItem = arr[indx];
      const newTodoItem = { ...oldTodoItem, [propName]: !oldTodoItem[propName]};

      return [
        ...arr.slice(0, indx),
        newTodoItem,
        ...arr.slice(indx + 1)
      ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty( todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty( todoData, id, 'done')
      };
    });
  };
  
  render() {

    const { todoData, inptToSearch, filter } = this.state;
    const visibleItems = this.filterItem(this.searchItem( todoData, inptToSearch ), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="wrapper">
        <AppHeader 
          todo={ todoCount } 
          done={ doneCount }
        />
        <Panels 
          onLabelSearch={ this.onSearchChange } 
          filter={  filter }
          onFilterChange={ this.onFilterChange }
        />
        <TodoList 
          todos={ visibleItems }
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
