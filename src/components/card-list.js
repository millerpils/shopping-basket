/****
  props = displayItems
***/

import React, { Component } from 'react'
import ClothingCard from './card'
import clothesData from './json/clothes.data.json'
let cards = []

class CardList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clothesData: {},
      displayItems: props.displayItems
    }
  }

  componentDidMount() {
    this.setState({
      clothesData: clothesData
    }, () => this.getCards() 
    )
  }

  getCards = () => {
    for ( let i = 0; i < this.state.clothesData.tshirts.length; i++ ) {
      cards.push(
        <ClothingCard 
          key={i} 
          card={this.state.clothesData.tshirts[i]} 
        />
      )
    }
    return cards
  }

  render() {
    return (
      <div className="cards">
        {cards}
      </div>
    )
  }
}

export default CardList