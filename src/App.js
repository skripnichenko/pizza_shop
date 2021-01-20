import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import OrderIsAccepted from './components/Cart/OrderIsAccepted/OrderIsAccepted';


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/order' component={OrderIsAccepted} />
      </div>
    </div>
  )
}

export default App;
