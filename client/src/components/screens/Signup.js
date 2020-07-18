import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mycard">
           <div className="card auth-card input-field">
            <h2>Register</h2>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email/username" />
            <input type="password" placeholder="Enter your password" />
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                Register
            </button>
            <h5>
                <Link to="/login">Already have an account ?</Link>
            </h5>
      </div>
        </div>
    )
}

export default Signup;

