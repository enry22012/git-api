import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';


class Header extends Component {
  render() {
    return(
      <div className='header'>
       <Navbar bg='light' expand='lg'>
         <Navbar.Brand href='/'>GIT-API</Navbar.Brand>
         <Navbar.Toggle aria-controls='basic-navbar-nav' />
         <Navbar.Collapse id='basic-navbar-nav'>
           <Nav className='mr-auto'>
             <Nav.Link href='/'>Home</Nav.Link>
           </Nav>
           <Form inline>
             <Button variant='outline-success'>Sign in</Button>
             <Button variant='outline-success'>Log in</Button>
           </Form>
         </Navbar.Collapse>
       </Navbar>
      </div>
    );
  }
}

export default Header;