import React from "react";
import "./pokemon.css";

const Image = ({ src, name }) => {
  return (
    <div className="image-div">
      {src && (
        <img
          className="pokemon-image"
      
          alt={name}
          src={src}
        />
      )}
    </div>
  );
};

export default Image;
