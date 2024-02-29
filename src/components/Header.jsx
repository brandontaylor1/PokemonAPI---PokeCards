import React from 'react'
import { useState } from 'react'
import './Header.css'
import axios from 'axios'

const Header = () => {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonInfo, setPokemonInfo] = useState({})

    const handleChange = (event) => {
        setPokemonName(event.target.value)
    }

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((result) => {
                console.log(result.data)
                setPokemonInfo = ({
                    name: pokemonName,
                    species: result.species.name,
                    img: result.sprites.front_default,
                    hp: result.stats[0].base_stat,
                    attack: result.stats[1].base_stat,
                    defense: result.stats[2].base_stat,
                    type: result.stats[0].type.name,
                    typeImg: result.stat[0].type.name
                })
        }).catch((err) => {
            console.error({message: err})
        });
    }


  return (
    <section className='header-section'>
        <h1 className='header-title'>Pokemon Cards</h1>
        <label htmlFor='pokemonInput'>Search Pokemon: </label>
        <input type='text' onChange={handleChange}    placeholder='Enter pokemon name..' />
        <button type='submit' onClick={searchPokemon} >Search</button>
    </section>
  )
}

export default Header
