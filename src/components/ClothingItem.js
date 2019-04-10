/****
  props.card 
***/

import React from 'react'

const ClothingItem = (props) => {
  return (
    <div className="items__item">
      <h3>{props.card.name} - {props.card.brand}</h3>
      <div className="item__price">
        &pound;{props.card.price}
      </div>
      <div className="item__photo">
        <img src={process.env.PUBLIC_URL + '/product-imgs/' + props.card.photo} alt="" />
      </div>
      <div className="item__buttons">
        <button type="submit">Buy</button>
      </div>
    </div>
  )
}

export default ClothingItem