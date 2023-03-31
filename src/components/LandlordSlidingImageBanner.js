import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const LandlordSlidingImageBanner = ({ landlordId }) => {
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(`http://localhost:3000/landlords/${id}/properties`);
      const properties = response.data;
      const images = properties.flatMap((property) => property.image);
      setImages(images);
    };
    fetchImages();
  }, [id]);

  return (
    <Carousel fade>
      {images.map((image) => (
        <Carousel.Item key={image}>
          <img className="d-block w-100" src={image} alt="Property" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default LandlordSlidingImageBanner;
