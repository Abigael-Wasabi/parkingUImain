import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';
import { Link } from 'react-router-dom';

function Fpassw() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i;
      return emailRegex.test(email);
    };

    setIsValidEmail(isEmailValid(newEmail));
    setEmail(newEmail);
  };

    //! reset passw logic API
  const handleSendResetEmail = async(event) => {
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:4000/user/passwordreset',{
        email: email,});
        console.log(response.data);
        if (response.status === 200) {
        navigate("/resetpassword"); }
        }catch(err){
            if (err.response && err.response.status ===500){
                console.log('Error initiating password reset:', err.response.status);
                alert('an error occurred while sending reset email:', err.response.status);
            }
        }};

  return (
    <div className='fp container'>
      <h5>Let's find your SwiftPark account</h5>
      <h6>What's your email</h6>
      <form onSubmit={handleSendResetEmail}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="What's your email"
        /><br></br>
        <Link to="/resetpassword">
        <button style={{marginLeft:'5px', width:'250px'}}
          disabled={!isValidEmail}>
          Send a password reset email
        </button><br></br>
        </Link>
      </form>
      <Footer/>
      <NavB/>
    </div>
  );
}

export default Fpassw;
