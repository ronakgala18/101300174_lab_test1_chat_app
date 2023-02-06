import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
export default function Register() {

    const [username, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submited");

        // set configurations
    const configuration = {
        method: "post",
        url: "http://localhost:3001/register",
        data: {
          username,
          firstName,
          lastName,
          password,
        },
      };
      // make the API call
    axios(configuration)
    .then((result) => {
      setRegister(true);
    })
    .catch((error) => {
      error = new Error();
    });
    }

    return (
        <>
            <h2>Register</h2>
      <Form>
        {/* username */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
                type="text"
                name="username"
                value={username}
                onChange={(e)=>setUserName(e.target.value)} 
                placeholder="Enter username" />
        </Form.Group>
        {/* firstname */}
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="Enter First Name" />
        </Form.Group>
        {/* lastname */}
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="Enter Last name" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <br></br>
        <Button 
            variant="primary" 
            type="submit"
            onClick={(e)=> handleSubmit(e)}>
          Register
        </Button>
         {/* display success message */}
         {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>

        </>
    )
}