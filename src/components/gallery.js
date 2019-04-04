/****
  props = clothesData - all card data
***/

import React from 'react'
import ClothingCard from './card'
let cards = []

const ClothingGallery = (props) => {

  console.log(props.clothesData)

  for (let i = 0; i < props.clothesData.tshirts.length; i++) {
    cards.push(
      <ClothingCard key={i} card={props.clothesData.tshirts[i]} />
    )
  }

  return (
    <div className="cards">
      {cards}
    </div>
  )
}

export default ClothingGallery