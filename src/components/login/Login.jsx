import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { getToPathname } from "react-router/lib/router";

const Login = () => {
  // const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className='w-100'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          paddingBottom: "50px",
        }}
      >
        <Form onSubmit={login}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          {/* <Link to='/'> */}
          <Button
            className='button n-button'
            style={{ border: "none", cursor: "pointer" }}
            type='submit'
          >
            Log In
          </Button>
          {/* </Link> */}
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
