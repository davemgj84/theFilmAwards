import React from "react";
import "../styles/Search.scss";

const Search = () => {
  return (
    <>
      <div className="search">
        <h2>Movie Title</h2>
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
    </>
  );
};

export default Search;
