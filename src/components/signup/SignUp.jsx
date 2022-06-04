import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Router = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      Router("/login");
      console.log(user);
    } catch (error) {
      console.log("i will apreciate you");
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
        <Form onSubmit={register}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              required
              onChange={(event) => {
                setRegisterEmail(event.target.value);
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
              required
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          {/* <Link to='/login'> */}
          <Button
            className='button n-button border-none'
            style={{ border: "none" }}
            type='submit'
          >
            Sign Up
          </Button>
          {/* </Link> */}
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
