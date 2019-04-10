/****
  props.card 
***/

import React from 'react'

const ClothingItem = (props) => {
  return (
    <div className="items__item">
      <h3>{props.item.name} - {props.item.brand}</h3>
      <div className="item__price">
        &pound;{props.item.price}
      </div>
      <div className="item__photo">
        <img src={process.env.PUBLIC_URL + '/product-imgs/' + props.item.photo} alt="" />
      </div>
      <div className="item__buttons">
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ClothingItem