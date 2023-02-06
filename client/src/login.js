import React from 'react'
import { Form, Button } from "react-bootstrap";
export default function Login() {
    return (
        <>
            <h2>Login</h2>
      <Form>
        {/* username */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </>
    )
}