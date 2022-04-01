import React from "react";
import { useNavigate } from "react-router-dom";
import { formatName, formatNumber } from "../../utils";
import Type from "../../components/Type/Type";
import "./pokemon.css";

const Evolution = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <div className="evolution-pokemon-div" onClick={() => navigate(`/${item.name}`)}>
      <img
        className="evolution-img"
        height={200}
        width={200}
        src={item.sprites?.other["official-artwork"]?.front_default}
      />

      <span className="evolution-span-1">
        <h3 className="evolution-h3-1">{formatName(item.name)}</h3>
        <h3 className="evolution-h3-2">{formatNumber(item.id)}</h3>
      </span>

      <Type pokemonItem={item} isLarge={false} />
    </div>
  ));

  return (
    <div className="evolution-wrapper">
      <span className="evolution-span-2">
        <h2 className="evolution-h2">Evolutions</h2>
      </span>
      <div className="evolution-content-div">{evolutions}</div>
    </div>
  );
};

export default Evolution;
