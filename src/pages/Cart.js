import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container className="my-4">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <Alert variant="info">Your cart is empty</Alert>
      ) : (
        cart.map((product) => (
          <Row key={product.id} className="cart-item mb-3">
            <Col md={2}>
              <Image src={product.image} alt={product.title} fluid />
            </Col>
            <Col md={8}>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </Col>
            <Col md={2}>
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default Cart;