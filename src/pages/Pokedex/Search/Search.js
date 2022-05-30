import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import SearchIcon from "@mui/icons-material/Search";
import OutsideClickHandler from "react-outside-click-handler";
import "./Search.css";

const P = new Pokedex();

const Search = () => {
  const [pokemon, setPokemon] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await P.getPokemonsList({
        limit: 898,
        offset: 0,
      });
      return pokemonList;
    };
    const pokemonx = async () => {
      const pokemony = await getPokemon();
      const pokemonz = pokemony.results;
      setPokemon(pokemonz);
    };
    pokemonx();
  }, []);

  // the value of the search field
  const [name, setName] = useState("");
  // the search result
  const [foundPokemon, setFoundPokemon] = useState("");

  const pokemons = pokemon.map((poke) => poke.name);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = pokemons.filter((pokemon) => {
        return pokemon.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundPokemon(results);
    } else {
      setFoundPokemon("");
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

  return (
    <div className="search-container">
      <div className="conditional-search-div">
      <div className="search-div1">
        <h2 className="search-h2">Name or Number</h2>
        <div className="search-input-container-div">
      <div className="search-input-container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="search-input"
   
          onClick={filter}
        />

        <button
          className="button-result"
          onClick={() => navigate(`/${name.toLowerCase()}`)}
        >
          <SearchIcon></SearchIcon>
        </button>
      </div>
      <div className="pokemon-list">
        {foundPokemon && foundPokemon.length > 0 ? (
          <OutsideClickHandler
            className="pokedexResultsDiv"
            onOutsideClick={() => {
              setFoundPokemon("");
            }}
          >
            {foundPokemon?.map((poke) => (
              <div
                className="jimmy"
                onClick={() =>{
                  setName(poke.charAt(0).toUpperCase() + poke.slice(1)); setFoundPokemon("")
                }
                }
              >
                {" "}
                <p className="jim">{poke}</p>
              </div>
            ))}
          </OutsideClickHandler>
        ) : null}
      </div>
      </div>
      </div>
      <div className="search-div2">
        <div className="green-banner"><h3 className="green-bannerh3">Search for a Pokémon by name or using its National Pokédex number.</h3></div>
      </div>
      </div>
    </div>
  );
};

export default Search;
