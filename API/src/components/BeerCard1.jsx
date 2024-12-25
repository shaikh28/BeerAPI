import React from 'react'

const BeerCard1 = ({beer}) => {
  return (
    <div>
       <div className="beer-card">
        <img src={beer.imageUrl} alt={beer.name} />
        <h3>{beer.name}</h3>
        <p>{beer.talLine}</p>
        <p>{beer.description}</p>
       </div>
    </div>
  )
}

export default BeerCard1