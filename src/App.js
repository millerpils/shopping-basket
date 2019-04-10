import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.css'
import './font-awesome.css'
import Header from './components/Header'
import ClothingList from './components/ClothingList'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className="App">
          <div className="wrapper"> 
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/clothes/:item" component={ClothingList} />
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

