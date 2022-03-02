import React, { useState, useEffect } from 'react'
import authService from './services/auth.service';

export const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState("")

    const handleSubmit = async (e) => {
        const response = await authService.login(username, password);
        if (response === "invalid") {
            setAlert("Wrong username or password");
        } else {
            //let user = await userService.getUserByUsername(username);
            //localStorage.setItem("user", JSON.stringify(user.data));

            window.alert("Login succeed");
        }
    }

    return (
        <>
            {/* <input type="text" placeholder="username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit} >Login</button> */}

            <section className="vh-100 loginForm">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-4">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-header card text-center bg-success text-white">
                                    <h3 className="mb-0">Login</h3>
                                </div>
                                <div className="card-body p-4 text-center">

                                    {(alert)
                                        &&
                                        (<div className="alert alert-danger" role="alert">
                                            {alert}
                                        </div>)}


                                    <div className="row">

                                        <div className="form-outline mb-4 col-12">
                                            <input type="text" placeholder="Username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="form-outline mb-4 col-12">
                                            <input type="password" placeholder="Password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-outline mb-4 col-12">
                                            <button className="btn btn-success btn-lg" onClick={handleSubmit} >Login</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )




}
