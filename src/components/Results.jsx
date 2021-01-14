import React from "react";
import "../styles/Results.scss";

const Results = () => {
  return (
    <>
      <div className="results-box">
        <div className="container">
          <h2>
            Results for "<span>The Big Lebowski</span>"
          </h2>
          <div className="results">
            <ul>
              <li>
                The Big Lebowski (1998) <button>Nominate</button>
              </li>
              <li>
                The Big Lebowski (1998) <button>Nominate</button>
              </li>
              <li>
                The Big Lebowski (1998) <button>Nominate</button>
              </li>
            </ul>
          </div>
          <p>* Only the top 3 search results will be displayed *</p>
        </div>
      </div>
    </>
  );
};

export default Results;
