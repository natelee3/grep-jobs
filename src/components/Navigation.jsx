import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import './Navigation.css'

const Navigation = (props) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
<>
    <Navbar bg="transparent" collapseOnSelect expand="lg">
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
        <Nav.Link eventKey="1">
          <Link to='/search'>Home</Link>
        </Nav.Link>
        {!!isAuthenticated ? (
          <>
            <Nav.Link eventKey="2">
              <Link to='/dashboard'>Dashboard</Link>
            </Nav.Link>
            <Nav.Link eventKey="3">
              <Link onClick={ () => logout({returnTo: window.location.origin})}>Logout</Link>
            </Nav.Link>
            
          </>
        ) : (
            <Nav.Link eventKey="2">
              <Link onClick={ async() => await loginWithRedirect()} href='/dashboard'>Login/Sign Up</Link>
            </Nav.Link>
        )}
          <button id="theme-toggle" type="button" onClick={props.toggleDarkMode}>
            {props.darkMode ? 
                            (<svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>)
                        : 
                            (<svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>)
                        }
      </button>

      </Nav>
    </Navbar.Collapse>
    
  </Container>
</Navbar>

    </>
  );
};

export default Navigation;
