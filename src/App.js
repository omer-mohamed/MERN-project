import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import ParticleComponent from "./components/ui/ParticleComponent";
import './App.css'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.data.charitynavigator.org/v2/Organizations?app_id=47e1deff&app_key=5a6f5c1534c434aee6333638279f3c59&pageSize=156&search=${query}`
      )
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [query])
  return (
    
   <div className='container'>
      <Header/>
      <Search getQuery={(q) =>
      setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
   </div>
  )
}

export default App
