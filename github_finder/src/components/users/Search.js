import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  // static propTypes = {
  //   searchUsers: propTypes.func.isRequired,
  //   clearUsers:propTypes.func.isRequired,
  //   showClear:propTypes.bool.isRequired,
  //   setAlert:propTypes.func.isRequired
  // };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired
};

export default Search;
