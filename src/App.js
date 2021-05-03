
import './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Header from './components/UI/Header.js'
import Search from './components/UI/Search.js'
import CharactersGrid from './components/characters/CharactersGrid.js'
const App = () => {

  const [items,setItem]= useState([])
  const [isLoading,setIsLoading]= useState(true)
  const [Query,setQuery]= useState('')
  const saleh = true;
  useEffect(()=>{
    const fectchItem = async ()=>{
      const resault = await axios(`https://www.breakingbadapi.com/api/characters?name=${Query}`)
     
      setItem(resault.data);
      setIsLoading(false);
    }
    fectchItem();
  },[Query])





  return (
    <div className="container">
       <Header/>
       <Search getQuery={ q => setQuery(q)}/>
       <CharactersGrid isLoading={isLoading} items={items} saleh={saleh}/>
    </div>
  )
}
 

export default App;
