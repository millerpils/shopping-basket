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

    switch ( this.state.displayItems ) {
      case 'tshirts':
        queryJSON = this.state.clothesData.tshirts
        break
      case 'jumpers':
        queryJSON = this.state.clothesData.jumpers
        break
      case 'trousers':
        queryJSON = this.state.clothesData.trousers
        break
      case 'jackets':
        queryJSON = this.state.clothesData.jackets
        break
      case 'suits':
        queryJSON = this.state.clothesData.suits
        break
      default: 
        queryJSON = this.state.clothesData.tshirts
        break
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
          item={queryJSON[i]} 
        />
      )
    }
    return cards
  }

  /* add this to its own component and use a callback
    function to handle the click */
    
  getNav = () => {
    return (
      <ul className="items-nav">
        <li>
          <Link 
            to="/clothes/tshirts" 
            displayitems="tshirts" 
            onClick={this.handleNavClick}
          >
            T-Shirts
          </Link>
        </li>
        <li>
          <Link 
            to="/clothes/jumpers" 
            displayitems="jumpers" 
            onClick={this.handleNavClick}
          >
            Jumpers
          </Link>
        </li>
        <li>
          <Link 
            to="/clothes/trousers" 
            displayitems="trousers" 
            onClick={this.handleNavClick}
          >
            Trousers
          </Link>
        </li>
        <li>
          <Link 
            to="/clothes/jackets" 
            displayitems="jackets" 
            onClick={this.handleNavClick}
          >
            Jackets
          </Link>
        </li>
        <li>
          <Link 
            to="/clothes/suits" 
            displayitems="suits" 
            onClick={this.handleNavClick}
          >
            Suits
          </Link>
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
          <div className="items">
            {this.state.isLoaded && this.getCards()}
          </div>
        </div>
      </div>
    )
  }
}

export default ClothingList