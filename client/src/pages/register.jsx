import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      // Call a function to register the user with the backend API and handle any errors
      console.log(formData);
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Create an Account</h1>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            placeholder="Enter your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            placeholder="Enter a password"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => onChange(e)}
            placeholder="Confirm your password"
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Register
        </Button>
        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;


