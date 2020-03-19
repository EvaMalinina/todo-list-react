import React from 'react';
import SearchPanel from './search-panel';
import FilterPanel from './filter-panel'

const Panels = ({ onLabelSearch }) => {
  return (
    <div className="panels">
      <SearchPanel 
        onLabelSearch={ onLabelSearch }
      />
      <FilterPanel/>
    </div>
  )
};

export default Panels;