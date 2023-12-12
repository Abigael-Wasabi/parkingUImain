import React from 'react';
import { Link } from 'react-router-dom';
import NavB from '../layouts/navB';
import Footer from '../layouts/footer';
import { Button } from 'react-bootstrap';

function About() {
  return (
   
    
<div className='row container nb about-cont'>
<div className=" d-flex justify-content-center"><Footer/></div>

  
<div className='col-md-2' style={{marginTop:'280px',}}><NavB/></div>
<div className='col-md-8'>
 

<div className='row'>

<div className='col-md-6'>
<h5 style={{textAlign:'center'}}>About Us</h5>
<h6 className="paragraph">Welcome to SwiftPark, where innovation meets convenience in the realm of parking solutions.
We understand that parking is an integral component of urban infrastructure.</h6>
</div>

<div className='col-md-6'>
  <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>
  <Button className="d-flex flex-column align-items-center justify-content-center" style={{textAlign:'center'}}>GET STARTED</Button>
  </Link>
</div>
</div>


<div className='row'>
<div className='col-md-6'></div>

<div className='col-md-6'>
<h5 style={{textAlign:'center'}}>Our Mission</h5>
<h6 className="paragraph">At SwiftPark, our mission is to revolutionize the parking experience by addressing the
challenges faced by parking areas.</h6>
</div>
</div>



<div className='row'>
<div className='col-md-6'>
<h5 style={{textAlign:'center'}}>What Sets Us Apart</h5>
<h6 className="paragraph">
<li>Efficient Payment Systems: Say goodbye to long queues and delays. We have implemented
a state-of-the-art online payment system.</li></h6>


<h6 className="paragraph"><li>Real-Time Parking Information: We provide real-time parking information through our
intuitive online booking system. Drivers can reserve and pay for parking spaces in
advance.</li></h6>

<h6 className="paragraph"><li>Seamless Transportation Services: Through our strategic partnerships with renowned 
ride-sharing companies like Uber, Bolt, and Yego, we offer a seamless transportation 
experience. </li></h6>
</div>
<div className='col-md-6'></div>
</div>




<div className='row'>
<div className='col-md-6'></div>
<div className='col-md-6'>
<h5 style={{textAlign:'center'}}>Why Choose Us?</h5>
<h6 className="paragraph">At SwiftPark, we prioritize customer satisfaction. We value your feedback and are 
continuously working to enhance our services.</h6><br></br>
<br/>
</div>
</div>


</div>
<div className="col-md-2"></div>


</div>


    
  );
};

export default About;