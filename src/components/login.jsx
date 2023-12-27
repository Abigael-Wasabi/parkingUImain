/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import axios from 'axios';
import Cookies from 'js-cookie';
import NavB from '../layouts/navB';
import './login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    updateButtonState(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    updateButtonState(event.target.value, email);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const updateButtonState = (email, password) => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };  

  // login logic
  const handleLogin = async (event) => {
    event.preventDefault(); 
    try { 
      const response = await axios.post('http://localhost:5000/user/login', {
        email: email,
        password: password,
      }); 

      console.log('Response:', response.data);

      if (response.data.userData) {
        const { token } = response.data.userData;

        Cookies.set('userData', token);

        setErrorMessage('');
        navigate('/dashboard');
        alert(`Welcome ${email}`);
      };

  
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setErrorMessage('User not found.');
      } else if (err.response && err.response.status === 401) {
        setErrorMessage('Incorrect password.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      console.log(err.message);
    } finally {
      updateButtonState(email, password, errorMessage);
    }
  };

  let imgsrc=require('../assets/logoPark.jpg')


  return (
    <div style={{ marginTop: '50px' }} className="LoginForm">
      <NavB/>
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <div style={{marginTop:'30px'}} className="inputts">
        <img style={{height:'70px', marginLeft:'150px', marginBottom:'50px', borderRadius:'10px'}} src={imgsrc} alt='logo'></img>
      </div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete='email'
        /><br></br>
        <label htmlFor="password">Password</label>
        <div className='password-input-container'>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete='current-password'
          />
         <div className="eye-icon-container">
            <FontAwesomeIcon
             icon={passwordVisible ? faEye : faEyeSlash}
             className="eye-icon"
             onClick={togglePasswordVisibility} />
        </div>
        </div><br></br>
        <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>
        <div style={{ textAlign: 'center', }} className="forgot-password">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" disabled={isButtonDisabled}>Login</button>
      </form>
    <div className=" d-flex justify-content-center"><Footer/></div>
    </div>
  );
};

export default LoginForm;