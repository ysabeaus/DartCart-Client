import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import authHeader from "../../features/authentication/AuthHeader";
<<<<<<< HEAD
import { orange, red } from '@mui/material/colors';
=======
import { storage } from "./firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { async } from "@firebase/util";
>>>>>>> dc9e24601c88495df52d268894edf88a29660bed

function UserProfile() {
  const [user, setUser] = useState({});
  const [Url, setUrl] = useState('');

  async function fetchUser() {
    const response = await fetch("http://localhost:9005/getProfile", {
      headers: authHeader(),
    });
    const fetchedUser = await response.json();
    console.log(fetchedUser);
    setUser(fetchedUser);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  //firebase upload below this

  const [progress, setProgress] = useState(0);

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    const image = e.target[0].files[0];
    console.log("uploading pic");
    console.log(image);
    uploadImage(image);
  };

  const uploadImage = (image) => {
    if (!image) {
      alert(`image format not supported${typeof image}`);
      return;
    }
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on( "state_changed", (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        //fetching download Url
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
          setUrl(url);
          console.log(url);
          updateImgUrl(url);
        });
      }      
    );
  };

  const updateImgUrl = async =>{
    user.imgUrl=Url;
  }

  

 

  return (
    <>
<<<<<<< HEAD
          <Paper elevation={6} style={{margin:"10px" , padding:"15px", textAlign:"left"}} key={user.user_id}>
          <h2>About Me</h2>
            talk about yourself here
          </Paper>
          <Paper elevation={6} style={{margin:"10px" , padding:"15px", textAlign:"left"}} key={user.user_id}>
            <h2>Additional information</h2>
            First Name: {user.firstName}<br/>
            Last Name: {user.lastName}<br/>
            Email: {user.email}<br/>
            Phone: {user.phone}

          </Paper>

          
</>



  )

=======
      <paper elevation={6}
      style={{flexDirection: "row",
      justifyContent: "flex-end"}}
      key={user.user_id}>
      

        <div className="pfp">
        <img src={user.imgUrl}  height={150} alt="Profile Picture" />   
          <form onSubmit={handleFireBaseUpload}>
            <input type="file" />
            <button onClick={() => user.imgUrl=Url}>Upload</button>
          </form>   
          
        </div>
      </paper>
>>>>>>> dc9e24601c88495df52d268894edf88a29660bed

      <Paper
        elevation={6}
        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
        key={user.user_id}
      >
        First Name: {user.firstName}
        <br />
        Last Name: {user.lastName}
        <br />
        Email: {user.email}
        <br />
        Phone: {user.phone}

      </Paper>
    </>
  );
}
export { UserProfile as default };
