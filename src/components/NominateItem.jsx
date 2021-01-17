import React from "react";
import noImageAvailable from "../assets/not-available.png";

const NominateItem = (props) => {
  if (props.image !== "N/A") {
    return (
      <>
        <li>
          <img src={props.image} alt="movie-poster" />
          <span index={props.index}>
            {props.title} ({props.year})
            <button onClick={props.removeNominee}>Remove</button>
          </span>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <img src={noImageAvailable} alt="movie-poster" />
          <span index={props.index}>
            {props.title} ( {props.year} )
            <button onClick={props.removeNominee}>Remove</button>
          </span>
        </li>
      </>
    );
  }
};

export default NominateItem;
