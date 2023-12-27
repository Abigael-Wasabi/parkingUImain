import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';

function Home() {
  return (
    <div className='container'>
      <NavB />
      <div className="row">
        <div className="col-sm-6">
          <h1>Welcome to SwiftPark!</h1>
          <p>Your solution for hassle-free parking.</p>
          <Button variant="primary" size="lg">Learn More</Button>
        </div>
        <div className="col-sm-6 d-flex flex-column align-items-end">
          <Link to="/signup">
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Latest News</h2>
          <Card>
            <Card.Body>
              <Card.Title>Exciting Updates Coming Soon!</Card.Title>
              <Card.Text>
                Stay tuned for the latest features and improvements. We're working hard to enhance your parking experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Responsive Design</h2>
          <p>SwiftPark is designed to provide a seamless experience across all devices. Park on the go with our mobile-friendly app!</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>See SwiftPark in Action</h2>
          <img
            src="https://via.placeholder.com/400x200"
            alt="SwiftPark in action"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
