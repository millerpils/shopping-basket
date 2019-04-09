import React from 'react'
import ClothingList from './ClothingList'

const Home = () => {
  return(
    <div className="grid-container">
      <ClothingList displayitems="tshirts"/>
    </div>
  )
}

export default Home