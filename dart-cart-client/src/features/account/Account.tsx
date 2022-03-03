import { Alert, Modal } from "react-bootstrap";
import { addedUser, saveUser, homeRedirect } from "../../common/accountSlice";
import { User } from "../../common/types";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { useAppDispatch } from "../../common/hooks";

export function Account() {
  const currentDate = Date.now();
  // const usernameField = useRef<HTMLInputElement>(null);
  // const emailField = useRef<HTMLInputElement>(null);
  // const passwordField = useRef<HTMLInputElement>(null);
  // const rePasswordField = useRef<HTMLInputElement>(null);
  // const firstNameField = useRef<HTMLInputElement>(null);
  // const lastNameField = useRef<HTMLInputElement>(null);
  // const locationField = useRef<HTMLInputElement>(null);
  // const phoneField = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const user: User = {
    id: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    registrationDate: 0
  };

  const onChangeHandler = () => {
    user.username = username;
    user.email = email;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
    user.location = location;
    user.phone = phone;
    user.registrationDate = currentDate;
  };

  // BASIC input validation: no empty fields, passwords must match, formatting requirements
  // Possible TODO: Password complexity requirements
  // Possible TODO: Enforcing username requirements, address formatting
  // function validateInput() {
  //     if (usernameField?.current?.value === "") {
  //         setError("Please enter a username.");
  //     } else if (emailField?.current?.value === "") {
  //         setError("Please enter an email address.");
  //     } else if (!emailField?.current?.value.includes("@") || !emailField?.current?.value.includes(".")) {
  //         setError("Invalid email address.");
  //     } else if (passwordField?.current?.value === "") {
  //         setError("Please enter a password.");
  //     } else if (passwordField?.current?.value !== rePasswordField?.current?.value) {
  //         setError("Passwords do not match. Please confirm your password.");
  //     } else if (firstNameField?.current?.value === "") {
  //         setError("Please enter your first name.");
  //     } else if (lastNameField?.current?.value === "") {
  //         setError("Please enter your last name.");
  //     } else if (locationField?.current?.value === "") {
  //         setError("Please enter your home address.");
  //     } else if (phoneField?.current?.value === "") {
  //         setError("Please enter your phone number.");
  //     } else if (
  //         !phoneField?.current?.value.search(/[^0-9()-]/g) ||
  //         phoneField?.current?.value.length != 14 ||
  //         !phoneField?.current?.value.includes("(") ||
  //         !phoneField?.current?.value.includes(")") ||
  //         !phoneField?.current?.value.includes("-")
  //     ) {
  //         setError("Invalid phone number.");
  //     } else {
  //         return true;
  //     }
  // }

  const createUser = async () => {
    // if (validateInput())
    user.username = username;
    user.email = email;
    user.password = password;
    user.firstName = firstName;
    user.lastName = lastName;
    user.location = location;
    user.phone = phone;
    user.registrationDate = currentDate;

    await dispatch(saveUser(user))
      .unwrap()
      .then((originalPromiseResult) => {
        setShowModal(true);
      })
      .catch((rejectedValueOrSerializedError) => {
        setError("That username is unavailable.");
      });
    clearInputs();
  };

  function clearInputs() {
    setUsername("");
    setEmail("");
    setPassword("");
    setRePassword("");
    setFirstName("");
    setLastName("");
    setLocation("");
    setPhone("");
  }

  // Redirect upon modal close
  function handleClose() {
    dispatch(homeRedirect(null));
    authService.login(user.username, user.password);
    nav("/");
  }

  return (
    <>
      <section className="vh-200">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-8">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-header card text-center bg-success text-white">
                  <h3 className="mb-0">Make a New Account</h3>
                </div>
                <div className="card-body p-5 text-center">
                  {error ? <Alert variant="danger">{error}</Alert> : null}

                  <div className="row">
                    <div className="form-outline mb-0 col-6">
                      <h4>Username</h4>
                    </div>
                    <div className="form-outline mb-0 col-6">
                      <h4>Email</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="text"
                        placeholder="DartTheCart"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="email"
                        placeholder="dartcart@email.com"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-outline mb-0 col-6">
                      <h4>Password</h4>
                    </div>
                    <div className="form-outline mb-0 col-6">
                      <h4>Confirm Password</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="password"
                        placeholder="P@S5W0RD!"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="password"
                        placeholder="P@S5W0RD!"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={rePassword}
                        onChange={(e) => {
                          setRePassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-outline mb-0 col-6">
                      <h4>First Name</h4>
                    </div>
                    <div className="form-outline mb-0 col-6">
                      <h4>Last Name</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="text"
                        placeholder="John"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="text"
                        placeholder="Doe"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-outline mb-0 col-6">
                      <h4>Address</h4>
                    </div>
                    <div className="form-outline mb-0 col-6">
                      <h4>Phone Number</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="text"
                        placeholder="1 Main St, Anytown, CA 12345"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="phone"
                        placeholder="(555) 555-5555"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={phone}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button
                    className="btn btn-success btn-lg btn-block"
                    onClick={createUser}
                  >
                    Register
                  </button>

                  <Modal show={showModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Account created. Welcome to DartCart!
                    </Modal.Body>
                    <Modal.Footer>
                      <button onClick={handleClose}>Close</button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
