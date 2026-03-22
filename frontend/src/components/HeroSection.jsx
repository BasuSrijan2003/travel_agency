import React, { useState } from "react";
import { Container, Button, Form, FormControl, Tab, Tabs, Row, Col, Carousel } from "react-bootstrap";
import { FaPlane, FaHotel, FaTrain, FaThumbsUp, FaHeadset, FaGlobe } from "react-icons/fa";
import "./HeroSection.css"; // Import CSS

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p className="hero-subtitle">Best Travel Deals | 24/7 Support | Hassle-Free Bookings</p>

        {/* Search Bar with Tabs */}
        <Tabs defaultActiveKey="flights" id="search-tabs" className="mb-3">
          <Tab eventKey="flights" title="Flights">
            <Form className="search-form" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Enter Destination..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">Search Flights</Button>
            </Form>
          </Tab>
          <Tab eventKey="hotels" title="Hotels">
            <Form className="search-form">
              <FormControl type="text" placeholder="Enter City..." className="search-input" />
              <Button>Search Hotels</Button>
            </Form>
          </Tab>
          <Tab eventKey="trains" title="Trains">
            <Form className="search-form">
              <FormControl type="text" placeholder="Enter Destination..." className="search-input" />
              <Button>Search Trains</Button>
            </Form>
          </Tab>
        </Tabs>
      </div>

      {/* {
      <Container className="travel-stories">
        <h2 className="text-center">Traveler Stories</h2>
        <Carousel controls={false} indicators={true} interval={3000} pause={false} fade>
          <Carousel.Item>
            <div className="story-slide">
              <img src="https://source.unsplash.com/800x500/?travel,adventure" alt="Story 1" />
              <p>"Exploring the mountains of Switzerland was a dream come true!"</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="story-slide">
              <img src="https://source.unsplash.com/800x500/?beach,sunset" alt="Story 2" />
              <p>"Sunset at Bali's beaches left me speechless. Must-visit!"</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="story-slide">
              <img src="https://source.unsplash.com/800x500/?city,nightlife" alt="Story 3" />
              <p>"Tokyo's nightlife and culture amazed me beyond words!"</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container> } */}

      {/* Why Choose Us Section */}
      <Container className="why-choose-us">
        <h2 className="text-center">Why Choose Us?</h2>
        <Row className="text-center mt-4">
          <Col md={4}>
            <FaThumbsUp className="feature-icon" />
            <h5>Best Travel Deals</h5>
            <p>We find the best discounts and packages for you.</p>
          </Col>
          <Col md={4}>
            <FaHeadset className="feature-icon" />
            <h5>24/7 Customer Support</h5>
            <p>We are here to assist you anytime, anywhere.</p>
          </Col>
          <Col md={4}>
            <FaGlobe className="feature-icon" />
            <h5>Global Destinations</h5>
            <p>Choose from hundreds of amazing travel locations.</p>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Plan Your Trip Today!</h2>
        <p>Book your next vacation with exclusive deals and offers.</p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;
