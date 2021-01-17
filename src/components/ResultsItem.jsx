import React from "react";
import noImageAvailable from "../assets/not-available.png";

const ResultsItem = (props) => {
  if (props.image !== "N/A") {
    if (props.nominee.find((obj) => obj.title === props.title) === undefined) {
      return (
        <>
          <li>
            <img src={props.image} alt="movie-poster" />
            <span index={props.index}>
              {props.title} ({props.year})
              <button onClick={props.nominate}>Nominate</button>
            </span>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li index={props.index}>
            <img src={props.image} alt="movie-poster" />
            <span>
              {props.title} ({props.year})
              <button disabled={true} onClick={props.nominate}>
                Nominate
              </button>
            </span>
          </li>
        </>
      );
    }
  } else {
    if (props.nominee.find((obj) => obj.title === props.title) === undefined) {
      return (
        <>
          <li>
            <img src={noImageAvailable} alt="movie-poster" />
            <span index={props.index}>
              {props.title} ({props.year})
              <button onClick={props.nominate}>Nominate</button>
            </span>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li index={props.index}>
            <img src={noImageAvailable} alt="movie-poster" />
            <span>
              {props.title} ({props.year})
              <button disabled={true} onClick={props.nominate}>
                Nominate
              </button>
            </span>
          </li>
        </>
      );
    }
  }
};

export default ResultsItem;
