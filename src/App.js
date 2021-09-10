//git push pokedex master
import './App.css';
import axios from "axios";
import { useEffect } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = userStsate("");

  const getPokemon = async () => {
    const toArray = [];
    try{
      const url = 'https://pokeapi.co/api/v2/pokemon/$(pokemon)'
      const res = await axios.get(url)
      console.log(res)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => ) {
    getPokemon()
  }, [])
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
