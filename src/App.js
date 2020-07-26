import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'
require('dotenv').config();

const apikey =String(process.env.REACT_APP_API_KEY);
const apiID =String(process.env.REACT_APP_API_ID);

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.data.charitynavigator.org/v2/Organizations?app_id=${apiID}&app_key=${apikey}&pageSize=156&search=${query}`
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
