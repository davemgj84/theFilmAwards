import React from "react";
import FilmPoster from "./FilmPoster";

const NominateItem = (props) => {
  return (
    <li>
      <FilmPoster image={props.image} />
      <span index={props.index}>
        {props.title} ({props.year})
        <button onClick={props.removeNominee}>Remove</button>
      </span>
    </li>
  );
};

export default NominateItem;
