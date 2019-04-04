import React from 'react'
import ClothingCard from './clothing-card'
let cards = []

const ClothingGallery = (props) => {

  for (let i = 0; i < props.clothesData.length; i++) {
    cards.push(
      <ClothingCard key={i} cardData={props.clothesData[i]} />
    )
  }

  return (
    <div className="cards">
      {cards}
    </div>
  )
}

export default ClothingGallery