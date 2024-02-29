import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({
    name: "",
    species: "",
    imgFront: "",
    imgBack: "",
    hp: 0,
    attack: 0,
    defense: 0,
    type: ""
  })

  const [pokemonInfo2, setPokemonInfo2] = useState({
    name: "",
    species: "",
    imgFront: "",
    imgBack: "",
    hp: 0,
    attack: 0,
    defense: 0,
    type: ""
  })


  const handleChange = (event) => {
      setPokemonName(event.target.value)
  }

  const searchPokemon1 = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((result) => {
              console.log(result.data)
              setPokemonInfo({
                  name: result.data.name,
                  species: result.data.species.name,
                  imgFront: result.data.sprites.front_default,
                  imgBack: result.data.sprites.back_default, 
                  hp: result.data.stats[0].base_stat,
                  attack: result.data.stats[1].base_stat,
                  defense: result.data.stats[2].base_stat,
                  type: result.data.types[0].type.name
              })
              setPokemonChosen(true);
      }).catch((err) => {
          console.error({message: err})
      });
  }

  const searchPokemon2 = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((result) => {
            console.log(result.data)
            setPokemonInfo2({
                name: result.data.name,
                species: result.data.species.name,
                imgFront: result.data.sprites.front_default,
                imgBack: result.data.sprites.back_default, 
                hp: result.data.stats[0].base_stat,
                attack: result.data.stats[1].base_stat,
                defense: result.data.stats[2].base_stat,
                type: result.data.types[0].type.name
            })
            setPokemonChosen(true);
    }).catch((err) => {
        console.error({message: err})
    });
}

  return (
    <>
      <section className='header-section'>
        <h1 className='header-title'>Pokemon Cards</h1>
        <label htmlFor='pokemonInput'>Enter 1st Pokemon: (Enter all lowercase) </label>
        <input type='text' onChange={handleChange} placeholder='Enter pokemon name..' />
        <button type='submit' onClick={searchPokemon1} >Search</button>

        <label htmlFor='pokemonInput'>Enter 2nd Pokemon: (Enter all lowercase) </label>
        <input type='text' onChange={handleChange} placeholder='Enter pokemon name..' />
        <button type='submit' onClick={searchPokemon2} >Search</button>
    </section>
    <section className='displaySection'>
      {!pokemonChosen 
      ? (<h1>Please Choose A Pokemon</h1>)
      : (<>
        <div className='pokemon1Container'>
          <h1>{pokemonInfo.name}</h1>
          <div className='imgContainer'>
            <span>
              <img src={pokemonInfo.imgFront} />
            </span>
            <span>
              <img src={pokemonInfo.imgBack} />
            </span>
          </div>
          <div className='statsContainer'>
            <p>HP: {pokemonInfo.hp}</p>
            <p>Attack: {pokemonInfo.attack}</p>
            <p>Defense: {pokemonInfo.defense}</p>
            <p>Attack Type: {pokemonInfo.type}</p>
          </div>
        </div>
        <div className='pokemon2Container'>
          <h1>{pokemonInfo2.name}</h1>
          <div className='imgContainer'>
            <span>
              <img src={pokemonInfo2.imgFront} />
            </span>
            <span>
              <img src={pokemonInfo2.imgBack} />
            </span>
          </div>
          <div className='statsContainer'>
            <p>HP: {pokemonInfo2.hp}</p>
            <p>Attack: {pokemonInfo2.attack}</p>
            <p>Defense: {pokemonInfo2.defense}</p>
            <p>Attack Type: {pokemonInfo2.type}</p>
          </div>
        </div>
        </>
        )
        
        }
    </section>

    </>
  )
}

export default App
