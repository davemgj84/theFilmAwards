import React from "react";

const ResultsItem = (props) => {
  return (
    <>
      <li index={props.index}>
        {props.title} ({props.year})
        <button onClick={props.nominate}>Nominate</button>
      </li>
    </>
  );
};

export default ResultsItem;
