import {useEffect, useState} from 'react'
import {getPokedexNumber, getFullPokedexNumber} from '../utils'
import Typecard from './TypeCard'

export default function PokeCard(props){
  const { selectedPokemon } = props

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const {name, height, abilities, stats, types, moves, sprites} = data || {}

  useEffect(() => {
    // if loading, exit logic
    if (loading || !localStorage) {return}   //loading is to avoid redudant calls, one call to API at a time, could provide user expereince when loading is true like a spinner or a loading screen/message

    // check if selectedPokemon info is available in cache
    
    //1 . define the cache   
    let cache = {}
    if (localStorage.getItem('pokedex')) {
      cache = JSON.parse(localStorage.getItem('pokedex'))
    }

    //2. check if the selected pokemon is in the cach, otherwise fetch from the API
    if (selectedPokemon in cache) {
      //read from cache
      setData(cache[selectedPokemon])
      return
    }

    //we passed all cache stuff and no avail so fetch data from API

    async function fetchPokemonData(){
      setLoading(true)
      try {
        const baseUrl = 'https://pokeapi.co/api/v2/'
        const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
        const finalUrl = baseUrl + suffix

        const res = await fetch(finalUrl)
        const pokemonData = await res.json()
        setData(pokemonData)

        console.log(pokemonData)
        cache[selectedPokemon] = pokemonData
        localStorage.setItem('pokedex', JSON.stringify(cache))

        
      } catch (error){
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonData()

    
  // if we fetch from API, make sure to save information to the cache for next time
  }, [selectedPokemon])

  if (loading || !data) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    )
  }

  return (
    <div className='poke-card'>
      <h4> #{getFullPokedexNumber(selectedPokemon)}</h4>
      <h2>{name}</h2>
      <div className="type-container"> 
        {types.map((typeObj, typeIndex) => {
          return (
            <Typecard key={typeIndex} type = {typeObj?.type?.name}/>   //safer option thanjust . goot for api calls
          )
        })}
      </div>
    </div>
  )
}