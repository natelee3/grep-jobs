import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
<>
    <Navbar bg="transparent" expand="lg">
  <Container className="nav-container">
    <Navbar.Brand href="/">
      <img src="/grepjobs_brand.png" alt="logo" className="brand-img"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        <Link onClick={ async() => await loginWithRedirect()} href='/dashboard'>Login/Sign Up</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
};

export default Navigation;
