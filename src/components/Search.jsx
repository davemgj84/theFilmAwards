import React from "react";
import "../styles/Search.scss";

const Search = () => {
  return (
    <>
      <div className="search">
        <div>
          <h2>Movie Title</h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a movie title..."
          />
        </div>
      </div>
    </>
  );
};

export default Search;
