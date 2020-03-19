import React from 'react';

const AppHeader = ({ todo, done }) => {
  return (
    <div className="header">
      <h1>My Todo list</h1>
      <span>{ todo } more to do, { done } done</span>
    </div>
  )
};

export default AppHeader;