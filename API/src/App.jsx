import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BeerCard1 from './components/BeerCard1'

function App() {

  const [beers, setBeers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBeers, setFilteredBeers] = useState([])

  useEffect(() => {
    const fecthBeers = async () => {
      try{
      const response = await fetch('https://api.sampleapis.com/beers/ale')
      const data = await response.json()
      setBeers(data)
      setFilteredBeers(data)
      } catch(err){
        console.error('Error fetching beer date',err)
      }
    }
    fecthBeers()
  }, [])
  
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    filterBeers(e.target.value)
  }
  const filterBeers = (query) => {
    if (!query) {
      setFilteredBeers(beers)
    }
    else {
      const filtered = beers.filter((beer) =>
        beer.name.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredBeers(filtered)
    }
  }
  return (
    <>
    <div className="app">
        <h1>Beer List</h1>
        <input
          type="text"
          placeholder="Search for a beer"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="beer-list">
        {filteredBeers.length > 0 ? (
          filteredBeers.map((beer) => <BeerCard1 key={beer.id} beer={beer} />)
        ) : (
          <p>No beers found</p>
        )}
      </div>
    </>
  )
}

export default App
