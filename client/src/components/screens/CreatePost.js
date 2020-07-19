import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
const CreatePost = () => {

  const history = useHistory();
   const[title,setTitle] = useState("");
   const[body,setBody] = useState("");
   const[image,setImage] = useState("");
   const[url,setUrl] = useState("");

  const postDetails = () => {
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","stayconnected");
    data.append("cloud_name","tejasvivig");
    fetch("https://api.cloudinary.com/v1_1/tejasvivig/image/upload",{
      method: "post",
      body: data
    })
    .then(res => res.json())
    .then(data => {
      setUrl(data.url);
    })
    .catch(err=>{
      console.log(err);
    })

    fetch("/createpost",{
      method: "post",
      headers:{
          "Content-Type":"application/json",
          "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          title,
          body,
          pic:url
      })
  }).then(res => res.json())
  .then(data=>{
      if(data.error){
          M.toast({html:data.error,classes: "#c62828 red darken-3"})
      }
      else{
        console.log(data.token)
        console.log(data.user)
        localStorage.setItem("jwt",data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
        M.toast({html:"Post has been created successfully",classes: "#43a047 green darken-1"})
        history.push('/login'); 
    }
  }).catch(error=>{
      console.log(error);
  })

    }

    return(
        <div className="card input-field"
        style={{
          margin: "190px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center"
        }}
        >
            <input type="text" placeholder="Please add a suitable title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Please add the description" value={body} onChange={(e) => setBody(e.target.value)}/>
            <div className="file-field input-field">
      <div className="btn #64b5f6 blue lighten-2">
        <span>Upload Image</span>
        <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      
    </div>
    <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
    onClick={()=>postDetails()}
    >
                Create Post
            </button>
        </div>
    )
}

export default CreatePost