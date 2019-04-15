import React, { Component } from 'react'

class Cart extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      cart: false
    }

    console.log(props.item)
  }
  
  render() {
    return (
      <div>
        <h2>Cart</h2>
      </div>
    )
  }

}

export default Cart