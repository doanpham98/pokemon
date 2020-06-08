import React, { useState } from 'react';
import './App.css';

function App() {
const [selected,setSelected] = useState(0);
const [pokemons, setPokemons] = useState([
  {pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG108.png', point: 0},
  {pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG118.png', point: 0},
  {pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG128.png', point: 0},
  {pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG138.png', point: 0},
  {pokeImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG158.png', point: 0}
])
   const mostVote= React.useMemo(()=>{
    console.log('dâta');
    let pointArr=pokemons.map(pokemon=>pokemon.point);
    let max= Math.max(...pointArr);
    return pokemons.find(pokemon=>pokemon.point===max);
   },[pokemons])
   const random = ()=>{
    const newSelected = Math.floor(Math.random()*pokemons.length);
    setSelected(newSelected!==selected?newSelected:
      newSelected===selected&&newSelected===pokemons.length-1?newSelected-1:
      newSelected+1);
  }
  const vote=(selected)=>{
      setPokemons(pokemons.map(pokemon=>
      pokemons.indexOf(pokemon)===selected?
      {...pokemon,point:pokemon.point+1}:pokemon
      ))
  }
  return (
    <div className="App">
      <h1>pokemon of the day</h1>
    <div className="img-box">
    <img src={pokemons[selected].pokeImg} alt="pokemon"/>
    <h2>has voted {pokemons[selected].point}</h2>
    </div>
      <button onClick={()=>vote(selected)}>Vote</button>
      <button onClick={random}>Next pokemon</button>
    <div className="img-box">
       <h1>
         pokemon with most vote
       </h1>
       <img src={mostVote.pokeImg} alt="pokemon"/>
         <h2>has voted {mostVote.point}</h2>
    </div>
    </div>
  );
}

export default App;
