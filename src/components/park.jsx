import React from 'react';
import { Link } from 'react-router-dom';


const Parking = () => {
  return (
    <div className="parking">
        <h3 style={{ textAlign: 'center', fontSize:'15px'}}>find your spot, park on the dot</h3>
        <Link to="/parking" style={{textDecoration: 'none', color: 'black'}}>
        <h2 className="d-flex flex-column align-items-center" style={{textAlign:'center'}}>PARKING</h2>
        </Link>
    </div>
  );
};

export default Parking;