import React, { Component } from 'react';

export default class FilterPanel extends Component {
  
  render() {
    return (
      <div className="filter">
        <ul className="filter__list">
          <li className="filter__item">
            <button className="filter__btn active">all</button>
          </li>
          <li className="filter__item">
            <button className="filter__btn">active</button>
          </li>
          <li className="filter__item">
            <button className="filter__btn">done</button>
          </li>
        </ul>
      </div>
    )
  }
};
