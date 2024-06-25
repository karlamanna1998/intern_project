
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/fakeStore';
import { CartContext } from '../context/CartContext';
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try{
        const data = await fetchProductById(id)
        setProduct(data);
      }catch(err){
          setError('Failed to fetch product details');
      }
    };

    getProduct();
  }, [id]);

  if (!product && !error) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      {error && <Alert variant="danger">{error}</Alert>}
      {product && (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.title} fluid />
          </Col>
          <Col md={6}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;