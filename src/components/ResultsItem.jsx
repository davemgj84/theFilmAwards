import React from "react";
import FilmPoster from "./FilmPoster";
import "../styles/ResultsItem.scss";
import "../styles/responsive/ResultsItem-resp.scss";

const ResultsItem = (props) => {
  const nominated = props.nominee.find((film) => film.id === props.id) !== undefined;
  return (
      <li>
        <FilmPoster image={props.image} />
        <span index={props.index}>
          {props.title} ({props.year})
          <button disabled={nominated} onClick={props.nominate}>
              { nominated ? "Nominated" : "Nominate" }</button>
        </span>
      </li>
  )
};

export default ResultsItem;
