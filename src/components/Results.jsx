import React from "react";
import "../styles/Results.scss";

const Results = () => {
  return (
    <>
      <div className="results-box">
        <h2>
          Results for "<span>The Big Lebowski</span>"
        </h2>
        <div className="results">
          <ul>
            <li>
              The Big Lebowski (1998) <button>Nominate</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Results;
