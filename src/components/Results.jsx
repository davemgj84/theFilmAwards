import React from "react";
import ResultsItem from "./ResultsItem";
import "../styles/Results.scss";

const Results = (props) => {
  const nominate = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    props.setNominee((prev) => [...prev, filmData[selection]]);
  };

  // create components for first 5 search results
  const searchResults = props.results.Search || [];
  const maxResults = 5;
  const filmData = [];
  const resultList = searchResults.slice(0, maxResults).map((film, index) => {
    filmData.push({ title: film.Title, year: film.Year, key: index });
    return (
      <ResultsItem
        key={index}
        index={index}
        title={film.Title}
        year={film.Year}
        nominate={nominate}
      />
    );
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
