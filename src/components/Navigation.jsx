import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import './Navigation.css'

const Navigation = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
<>
    <Navbar bg="transparent" expand="lg">
  <Container className="nav-container">
    <Navbar.Brand href="/">
      <img src="/grepjobs_brand.png" alt="logo" className="brand-img"/>
    </Navbar.Brand>
    {!!isAuthenticated ? (
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <Image src={user.picture} alt="avatar" className='user-avatar' fluid roundedCircle/>
      </Navbar.Toggle>
    ) : (
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    )}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to='/search'>Home</Link>
        </Nav.Link>
        {!!isAuthenticated ? (
          <>
            <Nav.Link>
              <Link to='/dashboard'>Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={ () => logout({returnTo: window.location.origin})}>Logout</Link>
            </Nav.Link>
            
          </>
        ) : (
          <>
            <Nav.Link>
              <Link onClick={ async() => await loginWithRedirect()} href='/dashboard'>Login/Sign Up</Link>
            </Nav.Link>
          </>
        )}
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
};

export default Navigation;
