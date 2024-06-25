import React from 'react';
import { Container,} from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-4 p-5 bg-light rounded shadow-sm text-center">
      <h1>Welcome to Our E-Commerce Site</h1>
      <p>Browse our amazing products and add them to your cart!</p>
    </Container>
  );
};

export default Home;