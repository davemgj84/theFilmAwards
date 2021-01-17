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
        const data = result.Search || [];
        const filmData = [];
        data.map((film) => {
          return filmData.push({
            title: film.Title,
            year: film.Year,
            image: film.Poster,
          });
        });
        props.setResults([]);
        props.setResults(filmData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <form className="search">
        <input
          type="text"
          placeholder="Search for a Film..."
          value={props.query}
          onChange={(evt) => props.setQuery(evt.target.value)}
        />
        <button onClick={(evt) => handleRequest(evt)}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default Search;
