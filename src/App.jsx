import Header  from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'


import {useState} from 'react'


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0) //index of pokemon in the pokedex
  return (
    <>
    <Header />
    <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
    <PokeCard selectedPokemon={selectedPokemon}/>
    
    </>
  )
}

export default App
