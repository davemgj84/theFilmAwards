import React from "react";
import "../styles/ArtDecoFrame.scss";
import "../styles/responsive/ArtDecoFrame-resp.scss";

const ArtDecoFrame = () => {
  return (
    <>
      <div className="frame">
        <div className="top-accent"></div>

        <div className="box-top-left"></div>
        <div className="box-top-left-accent"></div>

        <div className="box-top-right"></div>
        <div className="box-top-right-accent"></div>

        <div className="box-bottom-left"></div>
        <div className="box-bottom-left-accent"></div>

        <div className="box-bottom-right"></div>
        <div className="box-bottom-right-accent"></div>

        <div className="right-accent"></div>
        <div className="left-accent"></div>

        <div className="bottom-accent"></div>
      </div>
    </>
  );
};

export default ArtDecoFrame;
