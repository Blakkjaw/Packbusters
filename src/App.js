import React from 'react';
import './App.scss';
import Navbar from './components/shared/navbar/Navbar.js';
import Carousel from './components/home/Carousel';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className='app__body'>
        <Carousel></Carousel>
        {/*Carousel*/}
        {/* Highlights */}
        {/* New */}
      </div>
    </div>
  );
}

export default App;
