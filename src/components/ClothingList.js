/****
  props.displayItems
  this.props.match.params.item
***/

import React, { Component } from 'react'
import ClothingItem from './ClothingItem'
import { Link } from 'react-router-dom'
import clothesData from './json/clothes.data.json'

class ClothingList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clothesData: {},
      isLoaded: false,
      displayItems: null
    }
  }

  componentDidMount() {
    if ( this.props.displayitems ) { 
      this.setState({
        clothesData: clothesData,
        isLoaded: true,
        displayItems: this.props.displayitems
      })
    } else {
      this.setState({
        clothesData: clothesData,
        isLoaded: true,
        displayItems: this.props.match.params.item
      })
    }
  }

  getQuery = () => {
    let queryJSON

    /* 
      in reality, a separate query would be made to an API
      for all the tshirts, jumpers etc, then the loop would be more generic
    */

    if ( this.state.displayItems === 'tshirts') {
      queryJSON = this.state.clothesData.tshirts
    } else if ( this.state.displayItems === 'jumpers' ) {
      queryJSON = this.state.clothesData.jumpers
    } else if ( this.state.displayItems === 'trousers' ) {
      queryJSON = this.state.clothesData.trousers
    } else if ( this.state.displayItems === 'jumpers' ) {
      queryJSON = this.state.clothesData.jackets
    } else if ( this.state.displayItems === 'jackets' ) {
      queryJSON = this.state.clothesData.jackets
    } else if ( this.state.displayItems === 'suits' ) {
      queryJSON = this.state.clothesData.suits
    }

    return queryJSON
  }

  getCards = () => {
    let cards = []

    let queryJSON = this.getQuery()

    for ( let i = 0; i < queryJSON.length; i++ ) {
      cards.push(
        <ClothingItem 
          key={i} 
          card={queryJSON[i]} 
        />
      )
    }
    return cards
  }

  getNav = () => {
    return (
      <ul className="clothes-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clothes/tshirts" displayitems="tshirts" onClick={this.handleNavClick}>T-Shirts</Link>
        </li>
        <li>
          <Link to="/clothes/jumpers" displayitems="jumpers" onClick={this.handleNavClick}>Jumpers</Link>
        </li>
        <li>
          <Link to="/clothes/trousers" displayitems="trousers" onClick={this.handleNavClick}>Trousers</Link>
        </li>
        <li>
          <Link to="/clothes/jackets" displayitems="jackets" onClick={this.handleNavClick}>Jackets</Link>
        </li>
        <li>
          <Link to="/clothes/suits" displayitems="suits" onClick={this.handleNavClick}>Suits</Link>
        </li>
      </ul> 
    )
  }

  handleNavClick = (event) => {
    let displayItemsAttr = event.target.getAttribute('displayitems')

    this.setState({
      displayItems: displayItemsAttr
    })
  }
  
  render() {
    return (
      <div>
        <div className="grid-container">
          {this.getNav()}
          <div className="heading">
            <h2>{this.state.displayItems}</h2>
          </div>
          <div className="cards">
            {this.state.isLoaded && this.getCards()}
          </div>
        </div>
      </div>
    )
  }
}

export default ClothingList