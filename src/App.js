//git push pokedex master
import React from 'react';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const [works, setWorks] = useState(true)
  const [pokemon, setPokemon] = useState("darkrai");
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
      setWorks(true);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
      
    }catch(e){
      setPokemon('');
      setPokemonData([]);
      setPokemonType('')
      setWorks(false);
      console.log(e);
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1 class="b">Shiny Pokedex</h1>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon name"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {!works ? <h1>Check Your Spelling</h1>:pokemonData.map((data) => {
        return (
          <div className="container">
            <a href="https://www.youtube.com/watch?v=BoZ0Zwab6Oc" target="_blank">
              <img className="m" src={data.sprites["front_default"]} />
            </a>
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{data.types[0].type.name}</div>
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
                <div className="divTableRow">
                  <div className="divTableCell">Ability</div>
                  <div className="divTableCell">{data.abilities[0].ability.name}</div>
                </div>
              </div>
            </div>
            <a href="https://www.youtube.com/watch?v=BoZ0Zwab6Oc" target="_blank">
              <img className="m" src={data.sprites["front_shiny"]} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default App;
