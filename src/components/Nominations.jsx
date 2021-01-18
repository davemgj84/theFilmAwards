import React from "react";
import NominateItem from "./NominateItem";
import "../styles/Nominations.scss";
import "../styles/responsive/Nominations-resp.scss";

const Nominations = (props) => {
  const removeNominee = (evt) => {
    const selection = evt.target.parentElement.attributes.index.value;
    props.setNominee((prev) =>
      prev.filter((film) => film.title !== props.nominee[selection].title)
    );
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
  );
};

export default Nominations;
