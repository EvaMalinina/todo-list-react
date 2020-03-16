import React from 'react';

const SearchPanel = () => {

  const searchText = 'Type here to search';
  return (
    <input className="search" placeholder={ searchText } autoFocus></input>
  )
};

export default SearchPanel;