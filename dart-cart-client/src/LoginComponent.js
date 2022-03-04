import React, { useState, useEffect} from 'react'
import authService from './services/auth.service';

export const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState()

    const handleSubmit = async (e) => {
        const response = await authService.login(username, password);
        if (response === "invalid") {
            window.alert("Wrong username or password");
        } else {
            // let user = await userService.getUserByUsername(username);
            // localStorage.setItem("user", JSON.stringify(user.data));
            // await setUser();
            window.alert("Login succeed");
        }
    }
    
    return (
        <>
            <input type="text" placeholder="username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
            <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit} >Login</button>
        </>
    )

    


}
