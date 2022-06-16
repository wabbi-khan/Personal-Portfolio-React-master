import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Router = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [confirmPassword, setConfrimPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      const user = await sendPasswordResetEmail(
        auth,
        registerEmail,
        registerPassword
      );
      Router("/login");
      console.log(user);
    } catch (error) {
      console.log("i will apreciate you");
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
          // marginTop: "-100px",
          paddingBottom: "150px",
        }}
      >
        <Form onSubmit={register}>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#fb982f",
              fontSize: "35px",
            }}
          >
            Forget Password ?
          </span>
          <h5>
            {" "}
            {errorMessage !== "" ? (
              <h6 style={{ color: "red" }}> {errorMessage} </h6>
            ) : null}{" "}
          </h5>
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

          <div className='d-flex'>
            <Button
              className='button n-button'
              style={{ border: "none", cursor: "pointer" }}
              type='submit'
            >
              Reset Password
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
            <Link to='/login'>Sign up</Link>
          </p>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
