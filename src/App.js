import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import ClothingList from './components/ClothingList'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="wrapper">
            <main>
              <Route exact path="/" component={Home} displayItems="tshirts" />
              <Route path="/tshirts" component={ClothingList} displayItems="tshirts" />
              <Route path="/jumpers" component={ClothingList} displayItems="jumpers" />
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

