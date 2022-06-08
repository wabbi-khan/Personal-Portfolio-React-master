import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { getToPathname } from "react-router/lib/router";

const Login = () => {
  // const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      window.location.replace("https://fyp-dashboard-wheat.vercel.app");
      // navigate("/https://fyp-dashboard-wheat.vercel.app", { replace: true });
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        // className='w-100'
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-100px",
        }}
      >
        <Form onSubmit={login}>
          <h1> {errorMessage !== "" ? <h4> {errorMessage} </h4> : null} </h1>

          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              required
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              required
              placeholder='Password'
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3 d-flex'>
            <Form.Check type='checkbox' label='Remember' />
            <Link to='/'>
              <p className='px-4'>Forgotten password?</p>
            </Link>
          </Form.Group>

          <div className='d-flex'>
            <Button
              className='button n-button'
              style={{ border: "none", cursor: "pointer" }}
              type='submit'
            >
              Log In
            </Button>
          </div>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              paddingTop: "10px",
            }}
          >
            Don't have an accout? &nbsp;
            <Link to='/signup'>Sign up</Link>
          </p>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
