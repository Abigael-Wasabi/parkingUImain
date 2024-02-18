import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';
import { Row,Col } from 'react-bootstrap';


function Home() {
  return (
    <div>
    <Row>
      <NavB/>
    </Row>
    <Row>
      <Col style={{backgroundColor:'rgb(37,102,106,0.5)'}}>
        <h1 style={{textAlign: 'center'}}>SWIFTPARK</h1>
        <h5 style={{textAlign: 'center'}}>SwiftPark brings fast and efficient service with a friendly smile to the 
          City. Located along Muindi Street. – off Kenyatta Avenue, near the Kenyatta 
          International Airport. The facility offers free car-to-terminal shuttle 
          service, complimentary luggage assistance, contactless payment, and more. 
          Equipped with a geo-thermal heating system, this SwiftPark facility is doing 
          its part to promote the city’s environmental goals.</h5>
          <div style={{textAlign: 'center'}}>
          <u><h4 style={{textAlign: 'center'}}>What Sets Us Apart</h4></u>
          <li>Efficient Payment Systems</li>
          <li>Real-Time Parking Information</li>
          <li>Seamless Transportation Services</li>
          </div>
          <u><h4 style={{textAlign: 'center'}}>Terms and Conditions</h4></u>
        <h5 style={{textAlign: 'center'}}>You must login to your SwiftPark account during reservation to 
          receive the lower rate. Discounted rates and promotions do not 
          apply to days stayed beyond your reservation. Reservations must 
          be modified or canceled within 4 hours of start time. Rates subject 
          to change without notice. SwiftPark rates and fees are charged on 
          a daily basis. Taxes and/or fees may apply. Your credit card will 
          be charged in full when you confirm your reservation</h5>
      </Col>
      <Col>
         <Link to="/signup">
            <button >GET STARTED</button>
          </Link>
      </Col>
    </Row>
    <Row>
      <Footer/>
    </Row>
    </div>
  );
}

export default Home;
