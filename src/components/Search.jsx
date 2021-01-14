import React from "react";
import "../styles/Search.scss";

const Search = () => {
  return (
    <>
      <div className="search">
        <div>
          <h2>Movie Title</h2>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Search;
