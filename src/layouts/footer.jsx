import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="nb footer">
      <Row>
        <Row>
          <Col>
      <h2>PARKING</h2>
      <text>0500hrs-2300hrs</text><br></br>
      <text>M-pesa payment</text><br></br>
      <text>Strictly no cash payment</text><br></br>
      <text>Vacate on departure time</text><br></br>
          </Col>

          <Col>
      <h2>BOOKING</h2>
      <text>0500hrs-2300hrs</text><br></br>
      <text>M-pesa payment</text><br></br>
      <text>Strictly no cash payment</text><br></br>
      <text>Vacate on departure time</text><br></br>
          </Col>
          <Col>
      <h2>RESOURCES</h2>
      <text>SITEMAP</text><br></br>
      <text>TERMS OF SERVICE</text><br></br>
      <text>OUR COVID-19 EFFORTS</text><br></br>
      <text>OWNERS</text><br></br>
          </Col>
          <Col>
          
      <h2>CONTACT US</h2>
      <a href="mailto:swiftpark@gmail.com">techtonic@gmail.com</a><br></br>
      <text>+254 7 123 456 07</text><br></br>
      <text>Moi Avenue, Twins Tower</text><br></br>
      <text>P.O BOX 00100, Nairobi</text><br></br>
          </Col>
        </Row>
        <Row>
          <p>&copy; {currentYear} SwiftPark. All Rights Reserved.</p>
        </Row>
      </Row>
    </div>
  );
};

export default Footer;