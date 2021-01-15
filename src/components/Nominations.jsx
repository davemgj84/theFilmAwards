import React from "react";
import NominateItem from "./NominateItem";
import "../styles/Nominations.scss";

const Nominations = () => {
  const nominees = [];
  const nomineeList = nominees.map((movie, index) => {
    return <NominateItem key={index} title={movie.Title} year={movie.Year} />;
  });

  return (
    <>
      <div className="nomination-box">
        <div className="nom-container">
          <h2>
            <i className="fas fa-trophy"></i> Nominations
          </h2>
          <div className="nominations">
            <ul>
              {nomineeList}
              <li>
                The Big Lebowski ( 1998 ) <button>Remove</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nominations;
