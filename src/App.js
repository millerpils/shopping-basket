import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.css'
import './font-awesome.css'
import Header from './components/Header'
import ClothingList from './components/ClothingList'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'
import clothesData from './components/json/clothes.data.json'

class App extends Component {

  componentDidMount() {
    this.setState({
      clothesData: clothesData,
      cart: null
    })
  }

  render = () => {
    return (
      <Router>
        <div className="App">
          <div className="wrapper"> 
            <Header />
            <main>
              <Route exact path="/" 
                render={() => <Home clothesData={clothesData} />}
              />
              <Route 
                path="/clothes/:item" 
                render={props => <ClothingList {...props} clothesData={clothesData} />}
              />
              <Route 
                path="/cart" 
                component={Cart} 
              />
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

