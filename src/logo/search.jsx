import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default Search;
