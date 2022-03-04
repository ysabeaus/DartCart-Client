import React, { useState } from "react";
import {
  redirect,
  loginUser,
  selectStatus,
  selectUser,
  logout
} from "../../common/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const nav = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const user = useSelector(selectUser);

  const handleLogin = async (e) => {
    dispatch(loginUser({ username, password }));
  };

  const handleLogout = async (e) => {
    dispatch(logout(null));
    window.alert("Successfully Logged Out");
  };

  if (alert && status === "idle") setAlert(null);
  else if (status === "success") {
    dispatch(redirect(null));
    nav("/");
  } else if (!alert && status === "failure") {
    setAlert("Wrong username or password");
  }

  return (
    <>
      {!user ? (
        <section className="vh-100 loginForm">
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-4">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-header card text-center bg-success text-white">
                    <h3 className="mb-0">Login</h3>
                  </div>
                  <div className="card-body p-4 text-center">
                    {alert && (
                      <div className="alert alert-danger" role="alert">
                        {alert}
                      </div>
                    )}

                    <div className="row">
                      <div className="form-outline mb-4 col-12">
                        <input
                          type="text"
                          placeholder="Username"
                          id="typeEmailX-2"
                          className="form-control form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-12">
                        <input
                          type="password"
                          placeholder="Password"
                          id="typePasswordX-2"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-12">
                        <button
                          className="btn btn-success btn-lg"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <selection>
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-4">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-header card text-center bg-success text-white">
                    <h3 className="mb-0">Logout</h3>
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="row">
                      <div className="form-outline mb-4 col-12">
                        <button
                          className="btn btn-success btn-lg"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </selection>
      )}
    </>
  );
};

export default Login;