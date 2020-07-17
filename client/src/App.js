import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'; 
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Signup from './screens/Signup';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Route path="/" exact><Home /></Route>
   <Route path="/login"><Login /></Route>
   <Route path="/signup"><Signup /></Route>
   <Route path="/profile"><Profile /></Route>
   </BrowserRouter>
  );
}

export default App;
