import React from "react";
import closeBanner from "../helpers/closeBanner";
import "../styles/Banner.scss";
import "../styles/responsive/Banner-resp.scss";

const Banner = (props) => {
  if (props.nominee.length === 5) {
    return (
      <>
        <section className="banner-box">
          <i onClick={() => closeBanner()} className="far fa-times-circle"></i>
          <h2>
            <i className="fas fa-glass-cheers"></i> Thank you for your
            Nominations! <i className="fas fa-glass-cheers"></i>
          </h2>
        </section>
      </>
    );
  } else {
    return <> </>;
  }
};

export default Banner;
