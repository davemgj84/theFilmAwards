import React from "react";

const ResultsItem = (props) => {
  return (
    <>
      <li>
        {props.title} ( {props.year} )<button>Nominate</button>
      </li>
    </>
  );
};

export default ResultsItem;
