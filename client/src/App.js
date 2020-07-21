import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch,useHistory} from 'react-router-dom'; 
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import {useEffect} from 'react';
import createContext from 'react';


const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
   return(
     <Switch>
    <Route path="/" exact><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/profile"><Profile /></Route>
    <Route path="/createpost"><CreatePost /></Route>
    </Switch>
   )
}

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routing />
   </BrowserRouter>
  );
}

export default App;
