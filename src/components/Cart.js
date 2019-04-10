import React, { Component } from 'react'

class Cart extends Component {

  constructor() {
    super()
    
    this.state = {
      cart: false
    }
  }

  addItemtoCart() {
    console.log('blah')
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.addItemtoCart}>Add to cart</button>
      </div>
    )
  }

}

export default Cart