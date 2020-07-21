import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch,useHistory} from 'react-router-dom'; 
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import {useEffect,useReducer,useContext} from 'react';
import createContext from 'react';
import {reducer,initialState} from './reducers/userReducer'


export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }
    else{
      history.push('/login')
    }
  },[])
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
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
   <UserContext.Provider value={{state,dispatch}}>
   <BrowserRouter>
   <Navbar />
   <Routing />
   </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
