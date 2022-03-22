import React, { useState, useEffect } from 'react';
import { Container, Paper } from '@mui/material';
import axios from "axios";
import authHeader from "../../features/authentication/AuthHeader";



function UserProfile(){

    const[user, setUser] = useState({});

    async function fetchUser() {
        
        const response = await fetch("http://localhost:9005/getProfile", { headers: authHeader() });
        const fetchedUser = await response.json();
        console.log(fetchedUser);
        setUser(fetchedUser);
    }

  
    useEffect(() => {
      fetchUser();
  }, []);

  return(

    <>
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



}

export default UserProfile;