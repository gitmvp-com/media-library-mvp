import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

export const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Welcome to Media Library MVP</h1>
      <p className="text-center text-muted mb-5">
        A simplified version of Stash - Organize and browse your media files
      </p>
      <Row>
        <Col md={6} className="mb-4">
          <Link to="/videos" className="text-decoration-none">
            <Card className="text-center hover-card">
              <Card.Body className="py-5">
                <FontAwesomeIcon icon={faVideo} size="4x" className="mb-3" />
                <Card.Title>Videos</Card.Title>
                <Card.Text>Browse your video collection</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={6} className="mb-4">
          <Link to="/images" className="text-decoration-none">
            <Card className="text-center hover-card">
              <Card.Body className="py-5">
                <FontAwesomeIcon icon={faImage} size="4x" className="mb-3" />
                <Card.Title>Images</Card.Title>
                <Card.Text>Browse your image collection</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card bg="light">
            <Card.Body>
              <h5>About this MVP</h5>
              <p className="mb-0">
                This is a minimal viable product inspired by Stash. It demonstrates:
              </p>
              <ul className="mt-2">
                <li>React 17 with TypeScript</li>
                <li>React Router for navigation</li>
                <li>Bootstrap 4 for styling</li>
                <li>FontAwesome icons</li>
                <li>Responsive grid layout</li>
              </ul>
              <p className="text-muted mb-0">
                <small>
                  Note: This MVP uses mock data. In a full implementation, it would connect to a GraphQL backend.
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};