import React from "react";
import ResultsItem from "./ResultsItem";
import "../styles/Results.scss";

const Results = (props) => {
  const searchResults = props.results.Search || [];

  // create components for first 5 search results
  const maxResults = 5;
  const resultList = searchResults.slice(0, maxResults).map((movie, index) => {
    return <ResultsItem key={index} title={movie.Title} year={movie.Year} />;
  });

  return (
    <>
      <div className="results-box">
        <div className="container">
          <h2>
            <i className="fas fa-search"></i> Search Results
          </h2>
          <div className="results">
            <ul>{resultList}</ul>
          </div>
          <p>* Only the Top 5 Search Results are Shown</p>
        </div>
      </div>
    </>
  );
};

export default Results;
