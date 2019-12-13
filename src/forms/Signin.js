import React, { useState } from 'react';
import signupimg from './images/bg-2.jpg';
import { Link, useHistory } from 'react-router-dom';

const firebase = require('firebase');

const Signup = () => {
  const history = useHistory();

  const [state, setstate] = useState({
    email: '',
    pass: '',
    error: ''
  });

  const handleUserTyping = e => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.pass)
      .then(
        () => {
          history.push('./cart');
        },
        err => {
          setstate({ ...state, error: err.message });
        }
      );
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-34">Account Login</span>

              <div
                className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                data-validate="Type email"
              >
                <input
                  id="first-name"
                  className="input100"
                  value={state.email}
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleUserTyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                data-validate="Type password"
              >
                <input
                  className="input100"
                  value={state.pass}
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={handleUserTyping}
                />
                <span className="focus-input100"></span>
              </div>
              {state.error && <p>{state.error}</p>}
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={handleSubmit}>
                  Sign in
                </button>
              </div>

              <div className="w-full text-center p-t-27 p-b-239">
                <span className="txt1">Forgot</span>

                <span className="txt2">User name / password?</span>
              </div>

              <div className="w-full text-center">
                <Link to="/signup" className="txt3">
                  Sign Up
                </Link>
              </div>
            </form>

            <div
              className="login100-more"
              style={{ backgroundImage: `url(${signupimg})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
