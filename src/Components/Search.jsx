import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <input
          onChange={this.props.handleSearch}
          type="text"
          placeholder="Search for Individual"
        ></input>
      </form>
    );
  }
}
