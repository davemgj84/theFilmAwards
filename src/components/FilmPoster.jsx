import React from "react";
import noImageAvailable from "../assets/not-available.png";

const FilmPoster = (props) => {
  return (
    <img
      src={props.image !== "N/A" ? props.image : noImageAvailable}
      alt="movie-poster"
    />
  );
};

export default FilmPoster;
