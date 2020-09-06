import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../App'
import {useContext} from 'react'

const Navbar = () => {
    const{state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => { 
      if(state){
        return [
          <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>,
        <li>
          <button className="btn #c62828 red darken-3"  
          onClick={() => {
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push("/login")
          }}
          >
          Logout
          </button>
        </li>
        ]
      }
      else{
          return[
            <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
          ]
      }
    }
    return(
        <nav>
    <div className="nav-wrapper" >
      <Link to={state?"/":"/login"} className="brand-logo left">Stay Connected</Link>
      <ul id="nav-mobile" class="right">
        {renderList()}
      </ul>
    </div>
  </nav>
    )
}

export default Navbar;