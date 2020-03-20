import React from 'react';
import SearchPanel from './search-panel';
import FilterPanel from './filter-panel'

const Panels = ({ onLabelSearch, filter, onFilterChange }) => {

  return (
    <div className="panels">
      <SearchPanel 
        onLabelSearch={ onLabelSearch }
      />
      <FilterPanel
        filter={ filter }
        onFilterChange={ onFilterChange }
      />
    </div>
  )
};

export default Panels;