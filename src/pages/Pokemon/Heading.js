import React from "react";
import "./pokemon.css";
import { formatName, formatNumber } from "../../utils";

const Heading = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id)
  return (
    <div className="pokemon-heading-div">
      <span className="pokemon-heading-name">{name}</span>
      <span className="pokemon-heading-id">{number}</span>
    </div>
  );
};

export default Heading;
