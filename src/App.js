import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import ClothingNav from './components/nav-clothing'
import CardList from './components/card-list'
import Footer from './components/footer'

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <main>
            <div className="grid-container">
              <ClothingNav />
              <CardList displayItems="all" /> 
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
