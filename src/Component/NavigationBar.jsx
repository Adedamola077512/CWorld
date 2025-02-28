
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function NavigationBar() {
      useEffect(() => {
          AOS.init({
            duration: 2000,
            once: true, 
          });
        }, []);
  return (
    <Navbar expand="lg" variant="light" bg="warning" sticky="top" className="py-3">
      <Container>
        <Navbar.Brand href="#" className='CWorld' data-aos="fade-right"><b>CWorld</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            <Nav.Link href="/home" className='home'>Home</Nav.Link>
            <Nav.Link href="/about" className='home'>About</Nav.Link>
            <Nav.Link href="/blog" className='home'>Bolg</Nav.Link>
            <Nav.Link href="/partner" className='home'>Partners</Nav.Link>
            <Nav.Link href="/faq" className='home'>FAQ</Nav.Link>
          </Nav>
          <Button href='/contact' className="contact-btn" data-aos="fade-left">Contacts Us</Button>
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
