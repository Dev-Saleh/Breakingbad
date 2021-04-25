
import './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Header from './components/UI/Header.js'
import CharactersGrid from './components/characters/CharactersGrid.js'
const App = () => {

  const [items,setItem]= useState([])
  const [isLoading,setIsLoading]= useState(true)
  const saleh = true;
  useEffect(()=>{
    const fectchItem = async ()=>{
      const resault = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(resault.data);
      setItem(resault.data);
      setIsLoading(false);
    }
    fectchItem();
  },[])





  return (
    <div className="container">
       <Header/>
       <CharactersGrid isLoading={isLoading} items={items} saleh={saleh}/>
    </div>
  )
}
 

export default App;
