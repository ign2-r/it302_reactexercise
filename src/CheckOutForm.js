import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// Rockwell Dela Rosa, IT302-451, Unit 10 React.js Exercise, rmd2@njit.edu
function CheckOutForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkOut, setCheckOut] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have checked out successfully with email: ${email}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check 
          type="checkbox" 
          label="Check me out" 
          checked={checkOut} 
          onChange={(e) => setCheckOut(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CheckOutForm;
