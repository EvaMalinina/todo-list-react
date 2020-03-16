import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import Panels from './components/panels';

import './styles/main.scss';

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Create awesome app', important: true, id: 2},
    {label: 'Have lunch', important: false, id: 3}
  ]

  return (
    <div className="wrapper">
      <AppHeader/>
      <Panels/>
      <TodoList todos={ todoData }/>
    </div>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'));