import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { homeRedirect, loginUser, selectStatus, selectUser, fetchSeller, logout } from "../../common/slices/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import { fetchCart } from "../../common/slices/cartSlice";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const status = useSelector(selectStatus);
    const stateUser = useSelector(selectUser);
    let user = JSON.parse(stateUser);

    useEffect(() => {
        if (status === "failure") setError("Wrong username or password.");
    }, [status]);

    useEffect(() => {}, [status]);

    const handleLogin = async () => {
        await dispatch(loginUser({ username, password }));
        setError("");
        dispatch(fetchCart());
        setShowModal(true);
    };

    const handleLogout = () => {
        dispatch(logout(null));
        // dispatch(logoutSeller(null));
    };

    const handleClose = () => {
        setShowModal(false);
        dispatch(fetchSeller(user.id));
        dispatch(homeRedirect(null));
        nav("/");
    };

    return (
        <>
            {!user ? (
                <section className="vh-100 loginForm">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4">
                                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                    <div className="card-header card text-center bg-success text-white">
                                        <h3 className="mb-0">Login</h3>
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
                                                <button className="btn btn-success btn-lg" onClick={handleLogin}>
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
                                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                    <div className="card-header card text-center bg-success text-white">
                                        <h3 className="mb-0">Logout</h3>
                                    </div>
                                    <div className="card-body p-4 text-center">
                                        <div className="row">
                                            <div className="form-outline mb-4 col-12">
                                                <button className="btn btn-success btn-lg" onClick={handleLogout}>
                                                    Logout
                                                </button>

                                                <Modal show={showModal}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Login</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>Welcome back, {user.firstName}!</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button onClick={handleClose}>Close</Button>
                                                    </Modal.Footer>
                                                </Modal>
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
