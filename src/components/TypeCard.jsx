import {pokemonTypeColors} from '../utils'

export default function TypeCard(props){
  

  //the .[type] is used to dynamically access the attributes, without it, javascript would look for a variable called type
  const { type } = props
  return (
    <div className="type-tile" style={{ color: pokemonTypeColors?.[type]?.color, 
    background: pokemonTypeColors?.[type]?.background }}>     
      <p>{type}</p>
    </div>
  )
}