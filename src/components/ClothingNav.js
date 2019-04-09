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
        <Link to="/tshirts" displayitems="tshirts">T-Shirts</Link>
      </li>
      <li>
        <Link to="/jumpers" displayitems="jumpers">Jumpers</Link>
      </li>
      <li>
        <Link to="/trousers" displayitems="trousers">Jumpers</Link>
      </li>
      <li>
        <Link to="/jackets" displayitems="jackets">Jackets</Link>
      </li>
      <li>
        <Link to="/suits" displayitems="suits">Jumpers</Link>
      </li>
    </ul> 
  )
}

export default ClothingNav