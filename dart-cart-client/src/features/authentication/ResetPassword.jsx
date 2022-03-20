import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { homeRedirect, loginUser, selectStatus, selectUser, fetchSeller, logout } from "../../common/slices/authSlice";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import axios from "axios";

// Change URL for testing vs. production
const API_URL = process.env.REACT_APP_API_URL;

export const ResetPassword = () => {
    const[ searchParams, setSearchParams] = useSearchParams(); // holds query params from url
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true); // holds whether passwords currently match

    //hold state for request
    const [passwordresetReqReturned, setPasswordresetReqReturned] = useState(false); // has the request returned
    const [resetSuccess, setResetSuccess] = useState(false);                         // was the request successful

    // used for app state, i think
    const [error, setError] = useState("");
    const status = useSelector(selectStatus);
    
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    let userName = searchParams.get("data").split(""); // puts 'data's value from query param into username
    // unshift the caesar cipher 
    let unShift = -1;
    let base = 96; 
    for(let i = 0; i < userName.length; i++) {
        let shiftedLetter = userName[i].charCodeAt(0)+unShift 
        if(shiftedLetter > 122) {
            shiftedLetter = (base + shiftedLetter % 122);
        }
        else if(shiftedLetter < 97) {
            shiftedLetter = 123 - (97 - shiftedLetter);
        }

        userName[i] = String.fromCharCode( shiftedLetter );

    }
    console.log(userName);
      
    useEffect(() => {
        if (status === "failure") setError("Wrong username or password.");
    }, [status]);

    // reset user password in database 
    const handleResetPassword = () => { 
        axios
                .patch(API_URL + "resetpassword", {
                    username: userName,
                    password: password1
                })
                .then((response) => {
                    console.log("RESP: "+response);
                    if ("HEAD: "+response.headers) {
                       
                    }
                })
                .catch((error) => {
                    console.log("ERR: "+error);
                });
                //dispatch(homeRedirect(null));
                nav("/login");
    }
        
    // handlePassword1Change and handlePassword2Change compare the two passwords
    const handlePassword1Change = (event) => {
        if(password2 != "" && password2 != event.target.value) {
            setDoPasswordsMatch(false);
        }
        else {
            setDoPasswordsMatch(true);
        }
        setPassword1(event.target.value);
    }

    const handlePassword2Change = (event) => {
        if(password1 != event.target.value) {
            setDoPasswordsMatch(false);
        }
        else {
            setDoPasswordsMatch(true);
        }
        setPassword2(event.target.value);
    }

    return (
        <>  
        {passwordresetReqReturned ? 
            ( resetSuccess ? 
                (<h1 style={{color:"green"}}>reset worked</h1>) : 
                (<h1 style={{color:"red"}}>reset failed</h1>)) : 
            ( !userName ? 
                (<h1>no username found</h1>) : 
                (<section className="vh-100 loginForm">

<div className="container py-5" >
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-14">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-header card text-center bg-success text-white">
                    <h3 className="mb-0">Reset Password for {userName}</h3>
                </div>
                <div className="card-body p-4 text-center">
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="row">
                        <div className="form-outline mb-4 col-12">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control form-control-lg"
                                onChange={handlePassword1Change}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-outline mb-4 col-12">
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                id="typePasswordX-2"
                                className="form-control form-control-lg"
                                onChange={handlePassword2Change}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-outline mb-4 col-12">
                            <button className="btn btn-success btn-lg" onClick={handleResetPassword}>
                                Reset Password
                            </button>
                        </div>
                        {!doPasswordsMatch ? (<h5 style={{color:"red"}}>Passwords must match!</h5> ) : ( <span></span> )}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



                
                
                </section>) )





        }
        </>
    );
};

export default ResetPassword;
