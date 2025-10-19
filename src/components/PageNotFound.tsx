import React from 'react';
import { Container } from 'react-bootstrap';

export const PageNotFound: React.FC = () => {
  return (
    <Container className="text-center mt-5">
      <h1>404</h1>
      <p>Page not found</p>
    </Container>
  );
};