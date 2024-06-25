
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/fakeStore';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (!data.length) {
        setError('Failed to fetch products');
      }
      setProducts(data);
    };

    getProducts();
  }, []);
  const navigateToProductDetails = (id)=> {
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <h1 className="my-4">Products</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} onClick={navigateToProductDetails} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;