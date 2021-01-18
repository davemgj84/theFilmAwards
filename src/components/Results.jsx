import React from "react";
import ResultsItem from "./ResultsItem";
import "../styles/Results.scss";
import "../styles/responsive/Results-resp.scss";

const Results = (props) => {
  // nominate function - if 5 or less nominations have been made, nomiate film, if not already nominated
  const nominate = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    if (
      props.nominee.length <= 4 &&
      props.nominee.find(
        (film) => film.title === props.results[selection].title
      ) === undefined
    ) {
      props.setNominee((prev) => [...prev, props.results[selection]]);
    }
  };

  // create components for first 5 search results
  const resultList = props.results.map((film, index) => {
    return (
      <ResultsItem
        key={index}
        index={index}
        title={film.title}
        year={film.year}
        image={film.image}
        nominate={nominate}
        nominee={props.nominee}
      />
    );
  });

  return (
      <section className="results-box">
        <div className="container">
          <h2>
            <i className="fas fa-search"></i> Search Results
          </h2>
          <div className="results">
            <ul>{resultList}</ul>
          </div>
        </div>
      </section>
  );
};

export default Results;
