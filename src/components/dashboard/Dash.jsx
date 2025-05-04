import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const Dash = () => {

  return (
    <>
       <Navbar expand="lg" bg='dark' className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="/">DashBoard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link as={Link} to="/">Employee Management</Nav.Link>
              <Nav.Link as={Link} to="/Project">Project Management</Nav.Link>
              <Nav.Link as={Link} to="/Task">Task Management</Nav.Link>
           
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
    
            <Button variant="outline-success">Login</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

     
    </>    
)
}

export default Dash