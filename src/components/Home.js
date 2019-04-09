import React from 'react'
import ClothingNav from './ClothingNav'
import ClothingList from './ClothingList'

const Home = () => {
  return(
    <div classname="grid-container">
      <ClothingNav />
      <ClothingList />
    </div>
  )
}

export default Home