import { Alert } from "react-bootstrap";
import { addedUser, postUser } from "../../common/accountSlice";
import { User } from "../../common/types";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

export function Account() {
  const currentDate = Date.now();
  const dispatch = useDispatch();
  const usernameField = useRef(null);
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const repasswordField = useRef(null);
  const firstNameField = useRef(null);
  const lastNameField = useRef(null);
  const locationField = useRef(null);
  const phoneField = useRef(null);

  const [error, setError] = useState("");

  const user: User = {
    id: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    registrationDate: 0,
  };

  const onChangeHandler = () => {
    user.username = usernameField.current.value || "";
    user.email = emailField.current.value || "";
    user.password = passwordField.current.value || "";
    // Test matching password logic with repasswordField
    // user.username = usernameField.current.value || "";
    user.firstName = firstNameField.current.value || "";
    user.lastName = lastNameField.current.value || "";
    user.location = locationField.current.value || "";
    user.phone = phoneField.current.value || "";
    user.registrationDate = currentDate;
  };

  // Input error handling & User creation
  // TODO: Gracefully handle non-unique username input (SQL constraint error!)
  // TODO: Input validation and password complexity requirements
  const createUser = () => {
    if (usernameField.current.value === "") {
      setError("Error: Please enter a username.");
    } else if (passwordField.current.value === "") {
      setError("Error: Please enter a password.");
    } else if (passwordField.current.value !== repasswordField.current.value) {
      setError("Error: Passwords do not match.");
    } else {
      dispatch(postUser(user));
    }
  };

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
                        ref={usernameField}
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="email"
                        placeholder="dartcart@email.com"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        ref={emailField}
                        onChange={onChangeHandler}
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
                        ref={passwordField}
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="password"
                        placeholder="P@S5W0RD!"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        ref={repasswordField}
                        onChange={onChangeHandler}
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
                        ref={firstNameField}
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="text"
                        placeholder="Doe"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        ref={lastNameField}
                        onChange={onChangeHandler}
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
                        placeholder="100 Main Street, Anytown, USA 12345"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        ref={locationField}
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="form-outline mb-4 col-6">
                      <input
                        type="phone"
                        placeholder="(555) 555-5555"
                        onChange={onChangeHandler}
                        id="typePasswordX-2"
                        ref={phoneField}
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <button
                    className="btn btn-success btn-lg btn-block"
                    onClick={createUser}
                  >
                    Register
                  </button>
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
