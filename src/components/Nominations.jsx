import React from "react";
import NominateItem from "./NominateItem";
import "../styles/Nominations.scss";

const Nominations = (props) => {
  const removeNominee = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    const arrayCopy = [...props.nominee];
    arrayCopy.splice(selection, 1);
    props.setNominee(arrayCopy);
  };

  const nomineeList = props.nominee.map((movie, index) => {
    return (
      <NominateItem
        key={index}
        title={movie.title}
        year={movie.year}
        index={index}
        removeNominee={removeNominee}
      />
    );
  });

  return (
    <>
      <div className="nomination-box">
        <div className="nom-container">
          <h2>
            <i className="fas fa-trophy"></i> Nominations
          </h2>
          <div className="nominations">
            <ul>{nomineeList}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nominations;
