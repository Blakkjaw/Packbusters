import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/shared/navbar/Navbar.js';
import Carousel from './components/Carousel/Carousel';
import {setAuthenticatedUser} from './redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import {  Route, Routes } from 'react-router-dom';
import { Switch } from '@mui/material';
import Home from './containers/Home';
import MyLibrary from './containers/MyLibrary';
import Sets from './containers/Sets';
import Movies from './containers/Movies';
import Header from './components/Header';

function App() {

 // example on setting the authenticated user
 const dispatch = useDispatch();

 useEffect(() => {
  // this updates the state, which will be able to be consumed from any component using the use selector and selecting the user slice
  dispatch(setAuthenticatedUser({username: 'dummy'}));
}, []);

  return (
    <Container fluid>
      <Header />
      <div className='app__body'>
        <Routes>
            <Route exact path="/my-library" element={<MyLibrary />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/sets" element={<Sets />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
