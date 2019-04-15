import React from 'react'
import { Link } from 'react-router-dom'
    
const ClothingNav = () => {
  return (
    <ul className="items-nav">
      <li>
        <Link 
          to="/clothes/tshirts" 
        >
          T-Shirts
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/jumpers" 
        >
          Jumpers
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/trousers" 
        >
          Trousers
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/jackets" 
        >
          Jackets
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/suits" 
        >
          Suits
        </Link>
      </li>
    </ul> 
  )
}

export default ClothingNav