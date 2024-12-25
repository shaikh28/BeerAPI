import React from 'react'

const BeerCard = ({beer}) => {
  return (
    <div className="beer-card">
    <img src={beer.imageUrl} alt={beer.name} className="beer-image" />
    <h3>{beer.name}</h3>
    <p>{beer.tagline}</p>
    <p>{beer.description}</p>
  </div>
  )
}

export default BeerCard