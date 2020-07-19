import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
const Signup = () => {

    const history = useHistory();
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const PostData = () => {
        fetch("/signup",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes: "#c62828 red darken-3"})
            }
            else{
                M.toast({html:data.message,classes: "#43a047 green darken-1"})
                history.push('/login'); 
          }
        }).catch(error=>{
            console.log(error);
        })
   }

    return (
        <div className="mycard">
           <div className="card auth-card input-field">
            <h2>Register</h2>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Enter your email/username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
            onClick={() => PostData()}
            >
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

