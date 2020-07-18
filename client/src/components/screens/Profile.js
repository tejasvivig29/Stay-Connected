import React from 'react';
import { findByLabelText } from '@testing-library/react';

const Profile = () => {
    return (
        <div style={{maxWidth:"1200px",margin: "0px auto"}}>
            <div style={{
                    display:"flex",
                    justifyContent: "space-around",
                    margin: "18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                <div >
                    <img src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" style={{width: "160px",height: "160px",borderRadius: "80px"}}/>
                </div>
                <div>
                    <h4>Tejasvi Vig</h4>
                    <div>
                        <h6>40 posts</h6>
                        <h6>30 followers</h6>
                        <h6>2 following</h6>
                    </div>
                </div>
               
            </div>
            <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927312-3af3c565011f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    
                    
                </div>
        </div>
    )
}

export default Profile;

