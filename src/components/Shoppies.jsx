import React from "react";
import "../styles/Shoppies.scss";
import Search from "./Search";
import Results from "./Results";
import Nominations from "./Nominations";

const Shoppies = () => {
  return (
    <>
      <section className="shoppies">
        <div>
          <h1>The Shoppies</h1>
        </div>
        <Search />
        <div>
          <Results />
          <Nominations />
        </div>
      </section>
    </>
  );
};

export default Shoppies;
