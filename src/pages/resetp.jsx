import React from 'react';
import { Link } from 'react-router-dom';
import NavB from '../layouts/navB';
import Footer from '../layouts/footer';

function Resetp() {
  return (
    <div className='rp container'>
        <NavB/>
        <Footer/>
        <h5>Email sent</h5>
        <h6>We sent an email to {`$email`}.Check your email inbox 
        (including spam/junk folder). If this email is 
        connected to a SwiftPark account, you'll be able to 
        reset your password.<br></br>
        Didn't get the email? Try these tips from our
        <Link to="HC"> Help center</Link>.</h6>
        <Link to="/login"><button style={{ marginLeft: '10px' }}
        >Back to Login</button></Link>
    </div>
  )
}

export default Resetp;