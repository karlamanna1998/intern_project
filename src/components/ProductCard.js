import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onClick }) => (
  <Card className="product-card shadow-sm h-100" onClick={() => onClick(product.id)}>
    <Card.Img variant="top" src={product.image} alt={product.title} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Button variant="primary" onClick={() => onClick(product.id)}>View Details</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;