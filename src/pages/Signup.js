import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          Sign up as a landlord
        </Header>
        <Segment>
          <Form size="large" onSubmit={handleSubmit}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              label="Name"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Confirm Password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              type="password"
              value={formValues.passwordConfirmation}
              onChange={handleInputChange}
              required
            />
            <Button color="blue" fluid size="large" type="submit">
              Sign up
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
