import React from "react";
import ResultsItem from "./ResultsItem";
import "../styles/Results.scss";

const Results = (props) => {
  // nominate function - if 5 or less nominations have been made, nomiate film, if not already nominated
  const nominate = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    if (
      props.nominee.length <= 4 &&
      props.nominee.find((obj) => obj.title === filmData[selection].title) ===
        undefined
    ) {
      props.setNominee((prev) => [...prev, filmData[selection]]);
    }
  };

  // parse data and grab title and year and create simpler objects
  const data = props.results.Search || [];
  const maxResults = 5;
  const filmData = [];
  data.slice(0, maxResults).map((film) => {
    return filmData.push({ title: film.Title, year: film.Year });
  });

  // create components for first 5 search results
  const resultList = filmData.map((film, index) => {
    return (
      <ResultsItem
        key={index}
        index={index}
        title={film.title}
        year={film.year}
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
