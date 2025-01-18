import Header  from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'


import {useState} from 'react'


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0) //index of pokemon in the pokedex
  const [showSideMenu, setShowSideMenu] = useState(false)
  // this does the oppposute of what it should be (ie, when showSideMenu is true, its actually false)

  function handleToggleMenu(){
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu(){
    setShowSideMenu(false)
  }


  return (
    <>
    <Header handleToggleMenu={handleToggleMenu} />
    <SideNav 
      showSideMenu={showSideMenu} 
      selectedPokemon={selectedPokemon} 
      setSelectedPokemon={setSelectedPokemon} 
      handleCloseMenu={handleCloseMenu} 
      handleToggleMenu={handleToggleMenu}/>
    <PokeCard selectedPokemon={selectedPokemon}/>
    
    </>
  )
}

export default App
