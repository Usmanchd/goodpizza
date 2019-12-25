import React, { useState, useEffect } from 'react';
import signupimg from './images/bg-1.jpg';
import { Link, useHistory } from 'react-router-dom';

const firebase = require('firebase');

const Signup = () => {
  const history = useHistory();
  const [state, setstate] = useState({
    name: '',
    email: '',
    pass: '',
    cpass: '',
    address: '',
    phonenum: '',
    formerr: '',
    isLoading: false
  });

  useEffect(() => {
    if (state.formerr) {
      setTimeout(() => {
        setstate({ ...state, formerr: '' });
      }, 4000);
    }
  }, [state.formerr]);

  const handletyping = e => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const validatePass = () => {
    if (
      state.name === '' ||
      state.address === '' ||
      state.phonenum === '' ||
      state.pass === '' ||
      state.cpass === ''
    ) {
      setstate({ ...state, formerr: 'Please Fill all Details' });
      return false;
    } else if (state.pass !== state.cpass) {
      setstate({ ...state, formerr: 'Password doesnt match' });
    } else return true;
  };

  const handlesubmit = e => {
    e.preventDefault();
    setstate({ ...state, isLoading: true });
    if (!validatePass()) return;
    let newuser = {
      name: state.name,
      email: state.email,
      address: state.address,
      phonenum: state.phonenum
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.pass)
      .then(
        () => {
          firebase
            .firestore()
            .collection('users')
            .doc(state.email)
            .set(newuser)
            .then(
              () => {
                history.push('/checkout');
                setstate({ ...state, isLoading: false });
              },
              err =>
                setstate({ ...state, formerr: err.message, isLoading: false })
            );
        },
        err =>
          setTimeout(() => {
            setstate({ ...state, formerr: err.message, isLoading: false });
          }, 2000)
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
                data-validate="Type Email"
              >
                <input
                  id="email"
                  className="input100"
                  type="text"
                  name="email"
                  value={state.email}
                  placeholder="Email"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                data-validate="Type Name"
              >
                <input
                  id="name"
                  className="input100"
                  type="text"
                  name="name"
                  value={state.name}
                  placeholder="Name"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                data-validate="Type password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={state.pass}
                  placeholder="Password"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                data-validate="Type cpassword"
              >
                <input
                  className="input100"
                  type="password"
                  name="cpass"
                  value={state.cpass}
                  placeholder="Confirm Password"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                data-validate="Type Contact Number"
              >
                <input
                  className="input100"
                  type="text"
                  name="phonenum"
                  value={state.phonenum}
                  placeholder="Contact Num"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                data-validate="Type Address"
              >
                <input
                  className="input100"
                  type="text"
                  name="address"
                  value={state.address}
                  placeholder="Address"
                  onChange={handletyping}
                />
                <span className="focus-input100"></span>
              </div>
              {state.formerr && (
                <p className="alert alert-danger" style={{ width: '100%' }}>
                  {state.formerr}
                </p>
              )}
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={handlesubmit}>
                  Signup
                </button>
              </div>
              )}
              <div className="w-full text-center p-t-27 p-b-239">
                <span className="txt1">Forgot</span>

                <span className="txt2">User name / password?</span>
              </div>
              <div className="w-full text-center">
                <Link to="/signin" className="txt3">
                  Sign in
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
      {state.isLoading && (
        <div id="pb_loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#FDA04F"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Signup;
