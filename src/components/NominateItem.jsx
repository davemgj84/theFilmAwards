import React from "react";

const NominateItem = (props) => {
  return (
    <>
      <li>
        {props.title} ( {props.year} ) <button>Remove</button>
      </li>
    </>
  );
};

export default NominateItem;
