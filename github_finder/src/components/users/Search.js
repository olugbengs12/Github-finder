import React, { useState, useContext } from "react";
import propTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" name="Search" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired
};

export default Search;
