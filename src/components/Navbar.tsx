import React from 'react';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage, faHome } from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <div className="container-fluid">
        <LinkContainer to="/">
          <BSNavbar.Brand>Media Library</BSNavbar.Brand>
        </LinkContainer>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/videos">
              <Nav.Link>
                <FontAwesomeIcon icon={faVideo} className="mr-2" />
                Videos
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/images">
              <Nav.Link>
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Images
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </BSNavbar.Collapse>
      </div>
    </BSNavbar>
  );
};