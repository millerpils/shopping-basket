import React from 'react'

/*
  In theory the link categories would come from a DB.
  Consider spoofing a DB in JSON later on
*/

const ClothingNav = () => {
  return (
    <div className="grid-container">
      <ul>
        <li>
          <a href="/tshirts">T-Shirts</a>
        </li>
        <li>
          <a href="/jumpers">Jumpers</a>
        </li>
        <li>
          <a href="/trousers">Trousers</a>
        </li>
        <li>
          <a href="/jackets">Jackets</a>
        </li>
        <li>
          <a href="/suits">Suits</a>
        </li>
      </ul> 
    </div>
  )
}

export default ClothingNav