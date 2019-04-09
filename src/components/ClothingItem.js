/****
  props.card 
***/

import React from 'react'

const ClothingItem = (props) => {
  return (
    <div className="card">
      <h3>{props.card.name} - {props.card.brand}</h3>
      <div className="card__photo">
        <img src={process.env.PUBLIC_URL + '/product-imgs/' + props.card.photo} alt="" />
      </div>
    </div>
  )
}

export default ClothingItem