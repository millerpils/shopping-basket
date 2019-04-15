/****
  props.displayItems
  this.props.match.params.item
***/

import React from 'react'
import ClothingItem from './ClothingItem'
import ClothingNav from './ClothingNav'

const ClothingList = props => {
  const getQuery = () => {
    let queryJSON
    let displayItems
 
    if ( props.displayItems ){
      displayItems = props.displayItems
    } else {
      displayItems = props.match.params.item   
    }

    switch ( displayItems ) {
      case 'tshirts':
        queryJSON = props.clothesData.tshirts
        break
      case 'jumpers':
        queryJSON = props.clothesData.jumpers
        break
      case 'trousers':
        queryJSON = props.clothesData.trousers
        break
      case 'jackets':
        queryJSON = props.clothesData.jackets
        break
      case 'suits':
        queryJSON = props.clothesData.suits
        break
      default: 
        queryJSON = props.clothesData.tshirts
        break
    }

    return queryJSON
  }

  const getCards = () => {
    let cards = []
    let queryJSON = getQuery()

    for ( let i = 0; i < queryJSON.length; i++ ) {
      cards.push(
        <ClothingItem 
          key={i} 
          item={queryJSON[i]}
        />
      )
    }
    return cards
  }

  return (
    <div>
      <div className="grid-container">
        <ClothingNav />
        <div className="heading">
          <h2>{props.displayItems}</h2>
        </div>
        <div className="items">
          {getCards()}
        </div>
      </div>
    </div>
  )
}

export default ClothingList