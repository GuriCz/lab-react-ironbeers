import React from 'react'
import Homepage from './pages/Homepage';
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import BeersDetails from './pages/BeersDetails';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Homepage /> } />
        <Route path="/beers" element={ <Beers /> } />
        <Route path="/random-beer" element={ <RandomBeer /> } />
        <Route path="/new-beer" element={ <NewBeer /> } />
        <Route path="/beers/:beerID" element={<BeersDetails />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
