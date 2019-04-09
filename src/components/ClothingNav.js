import React from 'react'
import { Link } from 'react-router-dom'

/*
  In theory the link categories would come from a DB.
  Consider spoofing a DB in JSON later on
*/

const ClothingNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clothes/tshirts">T-Shirts</Link>
      </li>
      <li>
        <Link to="/clothes/jumpers">Jumpers</Link>
      </li>
      <li>
        <Link to="/clothes/trousers">Trousers</Link>
      </li>
      <li>
        <Link to="/clothes/jackets">Jackets</Link>
      </li>
      <li>
        <Link to="/clothes/suits">Suits</Link>
      </li>
    </ul> 
  )
}

export default ClothingNav