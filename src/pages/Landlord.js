import React, { useState, useEffect } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import Navbar from '../components/NavbarLandlord'
import LandlordSlidingImageBanner from '../components/LandlordSlidingImageBanner';
import ToDoList from '../components/ToDoList';
// import Notes from './Notes';
import Footer from '../components/Footer'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Landlord = () => {
  const [landlord, setLandlord] = useState({});
  const [properties, setProperties] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchLandlord = async () => {
      const response = await axios.get(`http://localhost:3000/landlords/${id}`);
      setLandlord(response.data);
      setProperties(response.data.properties);
    };
    fetchLandlord();
  }, []);

  return (
    <>
      <Navbar />
      <LandlordSlidingImageBanner images={properties.map((property) => property.image)} />
      <Container textAlign='center' style={{ margin: '2rem' }}>
        <Header as='h2'>{`Hello, ${landlord.name}`}</Header>
        <Divider />
            <ToDoList />
        <Divider />
        {/* <Notes /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Landlord;
