import React, { useState } from 'react';
import { Form, Button, Message, Container, Grid } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name) {
      errors.push('Name is required');
    }
    if (!formData.email) {
      errors.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Email is invalid');
    }
    if (!formData.password) {
      errors.push('Password is required');
    } else if (formData.password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    if (formData.password !== formData.passwordConfirmation) {
      errors.push('Passwords do not match');
    }
    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      try {
        const response = await axios.post('/landlords', formData);
        console.log(response.data);
        navigate('/success'); // redirect to success page
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <Container textAlign="center">
       <Grid centered verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, marginTop: "100px" }}>
          <h1>Landlord Registration Form</h1>
          <Form onSubmit={handleSubmit} error={formErrors.length > 0}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              label="Name"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              label="Email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Confirm Password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              type="password"
              value={formData.passwordConfirmation}
              onChange={handleInputChange}
            />
          {formErrors.length > 0 && (
            <Message
              error
              header="There was a problem with your submission"
              list={formErrors}
            />
          )}
            <Button
              type="submit"
              color="teal"
              fluid
              size="large"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Signup;
