import React from "react";
import axios from "axios";
import "../styles/Search.scss";

const Search = (props) => {
  const handleRequest = (evt) => {
    evt.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API}&type=movie&s=${props.query}`
      )
      .then((response) => response.data)
      .then((result) => {
        props.setResults(result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <div className="search">
        <div>
          <h2>
            <i class="fas fa-search"></i> Film Title
          </h2>
          <form>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={props.query}
              onChange={(evt) => props.setQuery(evt.target.value)}
              setSearch={props.query}
            />
            <button onClick={(evt) => handleRequest(evt)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
