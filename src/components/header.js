import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <div className="header__inner">
        <div className="header__branding">
          D&amp;M Clothing  
        </div>
        <Nav />
        <div>
          <div className="header__cart">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header