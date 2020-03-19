import React, { Component } from 'react';

export default class SearchPanel extends Component {

  state = {
    inptToSearch: ''
  };

  onLabelSearch = (e) => {
    const inptToSearch = e.target.value;
    this.setState({ inptToSearch });
    this.props.onLabelSearch(inptToSearch);
  };

  render() {
    const searchText = 'Type here to search';

    return (
      <form className="search">
        <input className="search__inpt" 
              placeholder={ searchText } 
              onChange={ this.onLabelSearch }
              value={ this.state.inptToSearch }
              autoFocus>
        </input>
      </form>
    )
  };
};
