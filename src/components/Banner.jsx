import React from "react";
import "../styles/Banner.scss";

const Banner = (props) => {
  const closeBanner = () => {
    const banner = document.querySelector(".banner-box");
    banner.style.display = "none";
  };

  if (props.nominee.length === 5) {
    return (
      <>
        <section className="banner-box">
          <i
            onClick={() => closeBanner()}
            className="far fa-times-circle fa-2x"
          ></i>
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
