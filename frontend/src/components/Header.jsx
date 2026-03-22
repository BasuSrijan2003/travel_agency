import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Header.css"; // Import CSS

const Header = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50 && !navbarSolid) {
        setNavbarSolid(true);
      } else if (scrollPosition <= 50 && navbarSolid) {
        setNavbarSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarSolid]);

  return (
    <Navbar expand="lg" className={`navbar-custom ${navbarSolid ? "solid-navbar" : "gradient-navbar"} fixed-top`} style={{ minHeight: "80px" }}>
      <Container>
        <Navbar.Brand href="#">THE WANDERLUST DUO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/travel">Travel</Nav.Link>
            <Nav.Link href="#">Join Us</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto search-box">
            <InputGroup>
              <InputGroup.Text className="search-icon">
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search Rides"
                className="search-input"
              />
              <Button variant="primary" type="submit">Search</Button>
            </InputGroup>
          </Form>
          {/* Login & Signup Buttons */}
          <div className="d-flex">
            <Button variant="outline-light" className="me-2">Login</Button>
            <Button variant="primary">Signup</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
