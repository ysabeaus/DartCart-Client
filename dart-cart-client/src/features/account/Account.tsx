import { Alert } from "react-bootstrap";
import { addedUser, saveUser } from "../../common/accountSlice";
import { User } from "../../common/types";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { stringify } from "querystring";

export function Account() {
  const currentDate = Date.now();
  const dispatch = useDispatch();
  const usernameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const rePasswordField = useRef<HTMLInputElement>(null);
  const firstNameField = useRef<HTMLInputElement>(null);
  const lastNameField = useRef<HTMLInputElement>(null);
  const locationField = useRef<HTMLInputElement>(null);
  const phoneField = useRef<HTMLInputElement>(null);

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
    user.username = usernameField?.current?.value || "";
    user.email = emailField?.current?.value || "";
    user.password = passwordField?.current?.value || "";
    user.firstName = firstNameField?.current?.value ?? "";
    user.lastName = lastNameField?.current?.value ?? "";
    user.location = locationField?.current?.value ?? "";
    user.phone = phoneField?.current?.value ?? "";
    user.registrationDate = currentDate;
  };

  // Input validation; no empty fields, passwords must match, formatting requirements
  function validateInput() {
    if (usernameField?.current?.value === "") {
      setError("Please enter a username.");
    } else if (emailField?.current?.value === "") {
      setError("Please enter an email address.");
    } else if (
      !emailField?.current?.value.includes("@") ||
      !emailField?.current?.value.includes(".")
    ) {
      setError("Invalid email address.");
    } else if (passwordField?.current?.value === "") {
      setError("Please enter a password.");
    } else if (
      passwordField?.current?.value !== rePasswordField?.current?.value
    ) {
      setError("Passwords do not match. Please confirm your password.");
    } else if (firstNameField?.current?.value === "") {
      setError("Please enter your first name.");
    } else if (lastNameField?.current?.value === "") {
      setError("Please enter your last name.");
    } else if (locationField?.current?.value === "") {
      setError("Please enter your home address.");
    } else if (phoneField?.current?.value === "") {
      setError("Please enter your phone number.");
    } else if (
      !phoneField.current?.value.search(/[^0-9()-]/g) ||
      phoneField.current.value.length != 14 ||
      !phoneField.current.value.includes("(") ||
      !phoneField.current.value.includes(")") ||
      !phoneField.current.value.includes("-")
    ) {
      setError("Invalid phone number.");
    } else {
      return true;
    }
  }

  const createUser = () => {
    if (validateInput()) {
      dispatch(saveUser(user));
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
                        ref={rePasswordField}
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
