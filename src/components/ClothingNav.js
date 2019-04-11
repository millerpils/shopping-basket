import React from 'react'
import { Link } from 'react-router-dom'
    
const ClothingNav = (props) => {

  const handleNavClick = function(event) {
    props.handleNavClick(event)
  }

  return (
    <ul className="items-nav">
      <li>
        <Link 
          to="/clothes/tshirts" 
          displayitems="tshirts" 
          onClick={handleNavClick}
        >
          T-Shirts
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/jumpers" 
          displayitems="jumpers" 
          onClick={handleNavClick}
        >
          Jumpers
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/trousers" 
          displayitems="trousers" 
          onClick={handleNavClick}
        >
          Trousers
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/jackets" 
          displayitems="jackets" 
          onClick={handleNavClick}
        >
          Jackets
        </Link>
      </li>
      <li>
        <Link 
          to="/clothes/suits" 
          displayitems="suits" 
          onClick={handleNavClick}
        >
          Suits
        </Link>
      </li>
    </ul> 
  )
}

export default ClothingNav