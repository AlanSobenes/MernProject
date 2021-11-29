import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/navBar';
import Home from './components/home'
import BrewMenu from './components/brewMenu';
import Item from './views/allItems';
import OneItem from './components/oneItem'
import BerryItem from './views/allberryItems'
import Cart from './views/cart'
import BerryMenu from './components/berryMenu';


function App() {
  return (
    <div className="App" >
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/BrewMenu'>
          <BrewMenu/>
        </Route>
        <Route exact path='/BerryMenu'>
          <BerryMenu/>
        </Route>
        <Route exact path='/brew/:cat/:type/:link'>
          <Item/>
        </Route>
        <Route exact path='/berry/:cat/:type/:link'>
          <BerryItem/>
        </Route>
      

        <Route exact path='/oneItem/:cat/:type/:id/:link'>
          <OneItem/>
        </Route>

        <Route exact path='/cart'>
          <Cart/>
        </Route>

        
        






      </Switch>
    </div>
  );
}

export default App;
