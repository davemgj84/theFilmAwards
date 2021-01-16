import React from "react";

const NominateItem = (props) => {
  return (
    <>
      <li index={props.index}>
        {props.title} ( {props.year} ){" "}
        <button onClick={props.removeNominee}>Remove</button>
      </li>
    </>
  );
};

export default NominateItem;
