import React from "react";
import FilmPoster from "./FilmPoster";

const ResultsItem = (props) => {
  const nominated = props.nominee.find((obj) => obj.title === props.title) !== undefined;
  return (
      <li>
        <FilmPoster image={props.image} />
        <span index={props.index}>
          {props.title} ({props.year})
          <button disabled={nominated } onClick={props.nominate}>
              { nominated ? "Nominated" : "Nominate" }</button>
        </span>
      </li>
  )
};

export default ResultsItem;
