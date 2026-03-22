import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Reviews.css"; // Import CSS


const Reviews = () => {
  const reviews = [
    { name: "sonai bhoumik", text: "Best travel experience ever!", rating: 5, image:"" },
    { name: "srijan basu", text: "Loved the customer service!", rating: 4.5, image: "/assets/review2.jpg" },
    { name: "liton sarkar", text: "Highly recommend this agency!", rating: 5, image: "/assets/review3.jpg" },
  ];


  const websiteFeatures = [
    { title: "Trip Itinerary Builder", description: "Plan your trips effortlessly with AI-powered recommendations." },
    { title: "Custom Travel Options", description: "Choose your hotels, trains, flights, and travel arrangements seamlessly." },
    { title: "Smart Travel Recommendations", description: "AI suggests your next dream destination based on your preferences." },
    { title: "Flight & Hotel Aggregation", description: "Easily compare and book flights and hotels at the best prices." },
    { title: "Budget Estimator", description: "Estimate your trip costs accurately and manage your budget." },
    { title: "Exclusive Discounts & Deals", description: "Enjoy the best travel offers on flights, hotels, trains, and more!" },
    { title: "Emergency Assistance Info", description: "Get real-time emergency assistance details for any travel issues." }
  ];

  const stories = [
    { img: "https://source.unsplash.com/1200x600/?travel,adventure", text: "Exploring the mountains of Switzerland was a dream come true!" },
    { img: "https://source.unsplash.com/1200x600/?beach,sunset", text: "Sunset at Bali's beaches left me speechless. Must-visit!" },
    { img: "https://source.unsplash.com/1200x600/?city,nightlife", text: "Tokyo's nightlife and culture amazed me beyond words!" },
    { img: "https://source.unsplash.com/1200x600/?nature,forest", text: "Walking through the Amazon Rainforest was magical." },
  ];

  // Story slider logic
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [stories.length]);
  
         return (
    <Container className="reviews-container">
      <h2 className="text-center">What Our Customers Say</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col md={4} key={index}>
            <Card className="review-card" style={{ backgroundImage: `url(${review.image})` }}>
              <div className="overlay"></div>
              <Card.Body>
                <h5>{review.name}</h5>
                <p>{review.text}</p>
                <p>⭐ {review.rating}/5</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Why Choose Us Section */}
      <h1 className="text-center mt-5">WHAT OUR PRODUCT PROVIDES</h1>
      <Row className="justify-content-center">
        {websiteFeatures.map((feature, index) => (
          <Col md={12} key={index} className="mb-5">
            <Card className="feature-card">
              <Card.Body>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Traveler Stories Section (Moved to the Bottom) */}
      <h2 className="text-center mt-5">Traveler Stories</h2>
      <div className="story-slider">
        <div className="story-container">
          <div
            className="story-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stories.map((story, index) => (
              <div className="story-item" key={index}>
                <img src={story.img} alt={`Story ${index + 1}`} />
                <p>{story.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
