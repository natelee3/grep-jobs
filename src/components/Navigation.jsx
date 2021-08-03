import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css'

const Navigation = (props) => {

  return (
<>
    <Navbar bg="transparent" expand="lg">
  <Container className="nav-container">
    <Navbar.Brand href="/">Job Search</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        {/* {((!localStorage.getItem('isLoggedIn'))) ? (
          <Nav.Link href="/login">Login</Nav.Link>
        ) : (
          <Nav.Link onClick={()=> localStorage.clear('isLoggedIn')}href="/">Logout</Nav.Link>
        )} */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
};

export default Navigation;
