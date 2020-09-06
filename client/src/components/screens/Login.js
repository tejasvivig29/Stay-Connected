import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useContext} from 'react';
import {UserContext} from '../../App'
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
const Login = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const PostData = () => {
        fetch("/login",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes: "#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"login successful",classes: "#43a047 green darken-1"})
                history.push('/'); 
          }
        }).catch(error=>{
            console.log(error);
        })
   }
    return (
        <div className="mycard">
           <div className="card auth-card input-field">
            <h2>Login</h2>
            <input type="text" placeholder="Enter your email/username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
            onClick={() => PostData()}
            >
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

