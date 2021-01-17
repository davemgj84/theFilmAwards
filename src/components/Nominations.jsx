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

  const nomineeList = props.nominee.map((film, index) => {
    return (
      <NominateItem
        key={index}
        title={film.title}
        year={film.year}
        image={film.image}
        index={index}
        removeNominee={removeNominee}
      />
    );
  });

  return (
    <>
      <section className="nomination-box">
        <div className="nom-container">
          <h2>
            <i className="fas fa-trophy"></i> Nominations
          </h2>
          <div className="nominations">
            <ul>{nomineeList}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nominations;
