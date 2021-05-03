import React from 'react'
import CharactersItem from './CharactersItem.js'
import Spinner from '../UI/Spinner.js'
const CharactersGrid = ({items,isLoading}) => {
    return isLoading ? (<Spinner/>) : (
    <section className="cards">
        {items.map(i =>{
        return <CharactersItem key={i.char_id} item={i} ></CharactersItem>
        })}
    </section>)
       
   
}

export default CharactersGrid
