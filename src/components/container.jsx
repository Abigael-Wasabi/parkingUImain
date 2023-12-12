import React from 'react';
import Booking from './book';
import Parking from './park';
import Footer from '../layouts/footer';
import NavBar from '../layouts/navbar';

const CompContainer =()=>{
    return (  
      <div className="container">
        <NavBar/>
        <div className="row">
          <div className=" d-flex justify-content-center"><Footer/></div>
          <div className="">
          <div className="row pop-up">
            <Booking /> 
          </div>
          <div className="row pop-up"> 
            <Parking />  
          </div>
          </div>
        </div>
      </div>
    );
};
export default CompContainer;