import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="mycard">
           <div className="card auth-card input-field">
            <h2>Login</h2>
            <input type="text" placeholder="Enter your email/username" />
            <input type="password" placeholder="Enter your password" />
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                Login
            </button>
            <h5>
                <Link to="/signup">Not a member ? Register</Link>
            </h5>
      </div>
        </div>
    )
}

export default Login;

