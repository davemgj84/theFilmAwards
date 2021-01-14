import React from "react";
import "../styles/Nominations.scss";

const Nominations = () => {
  return (
    <>
      <div className="nomination-box">
        <h2>Nominations</h2>
        <div className="nominations">
          <ul>
            <li>
              The Big Lebowski (1998) <button>Remove</button>
            </li>
            <li>
              The Big Lebowski (1998) <button>Remove</button>
            </li>
            <li>
              The Big Lebowski (1998) <button>Remove</button>
            </li>
            <li>
              The Big Lebowski (1998) <button>Remove</button>
            </li>
            <li>
              The Big Lebowski (1998) <button>Remove</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nominations;
