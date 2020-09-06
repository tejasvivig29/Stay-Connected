import React from 'react';
import {useState,useEffect} from 'react';


const Home = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('/allpost',{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt") 
            }
        }).then(res=>res.json())
          .then(result => {
              console.log(data)
              setData(result)
          })
    },[])
    return (
        <div className="home">
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>tejasvi</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h4>title</h4>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    )
}

export default Home;

