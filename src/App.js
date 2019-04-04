import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import ClothingNav from './components/clothing-nav'
import ClothingGallery from './components/clothing-gallery'
import clothesData from './components/json/clothes.data.json'
import Footer from './components/footer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      clothesData: clothesData
    }
  }

  render = () => {
    return (
      <div className="App">
        <Header />
        <ClothingNav />
        <main>
          <ClothingGallery clothesData={this.state.clothesData} /> 
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
