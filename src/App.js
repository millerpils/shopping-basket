import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import ClothingNav from './components/nav-clothing'
import ClothingGallery from './components/gallery'
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
        <div className="wrapper">
          <div className="grid-container">
            <div className="clothing-nav">
              <ClothingNav />
            </div>
            <main>
              <ClothingGallery clothesData={this.state.clothesData} /> 
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
