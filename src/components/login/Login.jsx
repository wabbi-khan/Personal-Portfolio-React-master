import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
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
        }}
      >
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
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
