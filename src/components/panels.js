import React from 'react';
import SearchPanel from './search-panel';
import FilterPanel from './filter-panel'

const Panels = () => {
  return (
    <div className="panels">
      <SearchPanel/>
      <FilterPanel/>
    </div>
  )
};

export default Panels;