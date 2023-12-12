import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <div className="booking">
      <h3 style={{textAlign: 'center', fontSize: '15px'}}>seamless parking solutions, reserve your spot today</h3>
      <Link to="/booking" style={{textDecoration: 'none', color: 'black'}}>
      <h2 className="d-flex flex-column align-items-center" style={{textAlign:'center'}}>BOOKING</h2>
      </Link>
    </div>
  );
};

export default Booking;
