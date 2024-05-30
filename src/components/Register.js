import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', dateOfBirth: '', email: '', password: '' });
  const { register } = useContext(AuthContext);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={onChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={onChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={onChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={onChange} required />
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Register;
