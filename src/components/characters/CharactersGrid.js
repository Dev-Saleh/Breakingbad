import React from 'react'
import CharactersItem from './CharactersItem.js'
const CharactersGrid = ({items,isLoading}) => {
    return isLoading ? (<h1>Loading</h1>) : (
    <section className="cards">
        {items.map(i =>{
        return <CharactersItem key={i.char_id} item={i} ></CharactersItem>
        })}
    </section>)
       
   
}

export default CharactersGrid
