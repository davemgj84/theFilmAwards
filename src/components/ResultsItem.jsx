import React from "react";

const ResultsItem = (props) => {
  if (props.nominee.find((obj) => obj.title === props.title) === undefined) {
    return (
      <>
        <li index={props.index}>
          {props.title} ({props.year})
          <button onClick={props.nominate}>Nominate</button>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li index={props.index}>
          {props.title} ({props.year})
          <button disabled={true} onClick={props.nominate}>
            Nominate
          </button>
        </li>
      </>
    );
  }
};

export default ResultsItem;
