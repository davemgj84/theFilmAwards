import React, { useState, useEffect } from "react";
import "../styles/Banner.scss";
import "../styles/responsive/Banner-resp.scss";

const Banner = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.nominee.length === 5);
  }, [props.nominee]);

  if (show) {
    return (
      <section className="banner-box">
        <i onClick={() => setShow(false)} className="far fa-times-circle"></i>
        <h2>
          <i className="fas fa-glass-cheers"></i> Thank you for your
          Nominations! <i className="fas fa-glass-cheers"></i>
        </h2>
      </section>
    );
  } else {
    return <></>
  }
};

export default Banner;
