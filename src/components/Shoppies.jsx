import React, { useState } from "react";
import "../styles/Shoppies.scss";
import "../styles/responsive/Shoppies-resp.scss";
import Search from "./Search";
import Results from "./Results";
import Nominations from "./Nominations";
import Banner from "./Banner";

const Shoppies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [nominee, setNominee] = useState([]);

  return (
    <>
      <section className="shoppies">
        <h1>
          <i className="fas fa-film"></i> THE SHOPPIES{" "}
          <i className="fas fa-film"></i>
        </h1>
        <Search setResults={setResults} query={query} setQuery={setQuery} />
        <div className="results-noms">
          <Results
            query={query}
            results={results}
            nominee={nominee}
            setNominee={setNominee}
          />
          <Nominations nominee={nominee} setNominee={setNominee} />
          <Banner nominee={nominee} />
        </div>
      </section>
    </>
  );
};

export default Shoppies;
