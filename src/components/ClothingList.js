/****
  props.displayItems
***/

import React, { Component } from 'react'
import ClothingItem from './ClothingItem'
import ClothingNav from './ClothingNav'
import clothesData from './json/clothes.data.json'

class ClothingList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clothesData: {},
      isLoaded: false,
      displayItems: props.displayItems
    }
  }

  componentDidMount() {
    this.setState({
      clothesData: clothesData,
      isLoaded: true
    })
  }

  getCards = () => {
    let cards = []
    for ( let i = 0; i < this.state.clothesData.tshirts.length; i++ ) {
      cards.push(
        <ClothingItem 
          key={i} 
          card={this.state.clothesData.tshirts[i]} 
        />
      )
    }
    return cards
  }

  render() {
    return (
      <div className="grid-container">
        <ClothingNav />
        <div className="cards">
          {this.state.isLoaded && this.getCards()}
        </div>
      </div>
    )
  }
}

export default ClothingList