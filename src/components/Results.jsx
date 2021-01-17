import React from "react";
import ResultsItem from "./ResultsItem";
import "../styles/Results.scss";

const Results = (props) => {
  // nominate function - if 5 or less nominations have been made, nomiate film, if not already nominated
  const nominate = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    const button = evt.target;
    if (
      props.nominee.length <= 4 &&
      props.nominee.find(
        (obj) => obj.title === props.results[selection].title
      ) === undefined
    ) {
      props.setNominee((prev) => [...prev, props.results[selection]]);
      button.disabled = true;
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
    <>
      <section className="results-box">
        <div className="container">
          <h2>
            <i className="fas fa-search"></i> Search Results
          </h2>
          <div className="results">
            <ul>{resultList}</ul>
          </div>
          <p>* Only the Top 5 Search Results are Shown</p>
        </div>
      </section>
    </>
  );
};

export default Results;
