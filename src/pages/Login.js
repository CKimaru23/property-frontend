import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Header } from "semantic-ui-react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get("/login");
      const user = data.find((u) => u.email === email && u.password === password);
      if (user) {
        navigate("/landlord");
      } else {
        setError("Email or password is incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const myStyle={
    backgroundImage: 
      "url('https://t.ly/MA-z')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
  };

  return (
    <div>
    <div style={myStyle}>
      <Navbar/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <Header as='h1' style={{alignItems: 'center', justifyContent: 'center' }}>Login Form</Header>
          <Form.Field>
            <label>Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Field>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
