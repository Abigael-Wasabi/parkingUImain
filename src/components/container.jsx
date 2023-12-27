import React from 'react';
import Booking from './book';
import Parking from './park';
import Footer from '../layouts/footer';
import NavBar from '../layouts/navbar';

const CompContainer = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <div className="col-md-6">
          <div className="row pop-up">
            <Booking />
          </div>
          <div className="row pop-up">
            <Parking />
          </div>
        </div>
        {/* <div className="col-md-6 d-flex justify-content-center">
          <img
            style={{
              height: '500px',
              width: '600px',
              borderRadius: '10px',
              margin: '10px',
            }}
            src={require('../assets/screenshot.png')}
            alt="logo"
          />
        </div> */}
      </div>
      <div className="d-flex justify-content-center">
        <Footer />
      </div>
    </div>
  );
};

export default CompContainer;