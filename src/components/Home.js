import React from 'react'
import ClothingList from './ClothingList'

const Home = (props) => {
  return(
    <ClothingList displayItems="tshirts" clothesData={props.clothesData} />
  )
}

export default Home