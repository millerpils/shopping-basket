import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header__inner">
        D&amp;M Clothing  
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        <div className="header__cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </header>
  )
}

export default Header