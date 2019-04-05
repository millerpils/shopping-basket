import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header'
import ClothingNav from './components/clothing-nav'
import CardList from './components/card-list'
import Footer from './components/footer'

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="wrapper">
            <main>
              <div className="grid-container">
                <ClothingNav />
                <CardList />
              </div>
            </main>
          </div>
          <Footer />
        </div>
        <Route path="/tshirts" component={CardList} displayItems="tshirts" />
        <Route path="/jumpers" component={CardList} displayItems="tshirts" />
      </Router>
    )
  }
}

export default App;

