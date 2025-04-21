import { useEffect, useState } from 'react';
import CardComponent from "./CardComponent.jsx";

const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadPokemons = async () => {
      const newPokeList = [];
      while (newPokeList.length < 12) {
        const randomId = randint(1, 550);
        const pokemon = await fetchPokemon(randomId);
        if (pokemon && !newPokeList.some(p => p.name === pokemon.name)) {
          newPokeList.push(pokemon);
        }
      }
      setPokeList(newPokeList);
    };

    loadPokemons();
  }, []);

  const fetchPokemon = async (number) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const res = await fetch(endpoint);
    if (!res.ok) return null;
    const jason = await res.json();
    return {
      url: jason.sprites.other['official-artwork'].front_default,
      name: jason.forms[0].name,
      clicked: false
    };
  };

  function shuffleArray() {
    const shuffledArray = pokeList.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setPokeList(shuffledArray);
  }

  return (
    <div>
      <h1>Score: {score}</h1>
      <h2>Best Score: {bestScore}</h2>
      <div className="grid-container">
        {pokeList.map((pokemon, index) => (
          <CardComponent
            key={index}
            url={pokemon.url}
            name={pokemon.name}
            updateList={setPokeList}
            pokeList={pokeList}
            shuffle={shuffleArray}
            setScore={setScore}
            setBestScore={setBestScore}
            score={score}
            bestScore={bestScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;