//git push pokedex master
import React from 'react';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  useEffect(() =>  {
    getPokemon()
  }, [])
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  const getPokemon = async () => {
    const toArray = [];
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }
  console.log(pokemonData);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1 class="b">Shiny Pokedex</h1>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img class="m" src={data.sprites["front_shiny"]} />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
