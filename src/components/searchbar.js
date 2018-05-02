import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value: "Surfing",
    }
  };

  handleClick(event){
    this.props.searchVideo(event.target.value);
    this.setState({
      value: event.target.value
    });

  };

  render(){
    return(
      <div className="searchBar">
        <input className="inputBar"
          onChange={(event) => this.handleClick(event)}
          value={this.state.value}
        />
      </div>
    );
  };
};

export default SearchBar;
