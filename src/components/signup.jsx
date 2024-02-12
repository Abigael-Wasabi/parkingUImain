/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import Tnc from '../layouts/t&c';
import NavB from '../layouts/navB';
import Footer from '../layouts/footer';
import axios from 'axios';
import './signup.css';
// import '../assets/logoPark.jpg';
import { Row,Col } from 'react-bootstrap';

const SignUpForm = ({switchToLogin}) => {
  const navigate = useNavigate();//Initialize useNavigate //navigate("/login")
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const toggleModal =  () => {
    setShowModal(!showModal);
  }
  const closeModal = () => {
    setShowModal(false);
  };
 
  const handleFirstnameChange = (event) =>{
    setFirstname(event.target.value);
    updateButtonState(event.target.value, lastname, email, password, confirmPassword);
  };

  const handleLastnameChange = (event) =>{
    setLastname(event.target.value);
    updateButtonState(firstname, event.target.value, email, password, confirmPassword);
  };

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState(firstname,lastname, event.target.value, password, confirmPassword);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState(firstname, lastname, email, event.target.value, confirmPassword);
  };

  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleConfirmPasswordChange = (event) =>{
    setConfirmPassword(event.target.value);
    updateButtonState( firstname,lastname, email, password, event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const updateButtonState = (firstname, lastname, email, password, confirmPassword) => {
    if (firstname && lastname && email && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

    //signup logic //API
  const handleSignUp = async(event) => {
    event.preventDefault();
    try{
      const response= await axios.post('http://localhost:5000/user/signup', {
         firstname:firstname, 
         lastname:lastname, 
         email:email, 
         password:password,
         confirmPassword:confirmPassword,
         });

         if (!isNameValid(firstname) || !isNameValid(lastname)) {
          console.log("Invalid firstname or lastname.");
          return;
        }
         if (!isEmailValid(email)) {
          console.log("Invalid email address");
          return;
        }
         if (password !== confirmPassword) {
          console.log("Passwords do not match");
          return;
        }
         if (!isPasswordValid(password)) {
          console.log("Password does not meet complexity requirements");
          return;
        }
         console.log(response.data);//response from the server
         navigate("/login");
      }catch(err){
        if (err.response && err.response.status === 400) {
          setErrorMessage(`User with email ${email} already exists`);
          console.log(err.response.data.message);}
        else {
          setErrorMessage('An error occurred. Please try again later.');}
          console.log(err.message);} 
        finally {
          updateButtonState(email, password, errorMessage);}
        };
        // let imgsrc=require('../assets/logoPark.jpg')
  return (
    <>
    <Row><NavB/></Row>
    <Row>
      <Col>y</Col>
      <Col></Col>
    <form onSubmit={handleSignUp}>
    <div className="SignUpForm">
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <div style={{display: 'flex'}}>
        <Link to="/admin"><button style={{backgroundColor:'#daf3ef',  width:'80px'}}>ADMIN</button></Link>
        <Link to="/signup"><button style={{backgroundColor:'#daf3ef', width:'80px', marginLeft:'10px'}}>USER</button></Link>
      </div>
      <div style={{marginTop:'30px'}} className="inputts">
        {/* <img style={{height:'70px', marginLeft:'150px', marginBottom:'50px', borderRadius:'10px'}} src={imgsrc} alt='logo'></img> */}
      </div>
      <input 
       type="text"
       placeholder="Firstname"
       id="firstname"
       value={firstname} 
       onChange={handleFirstnameChange}
       autoComplete="given-name"
       style={{ '--placeholder-color': 'black' }} /><br></br>

      <input 
       type="text"
       placeholder="Lastname"
       id="lastname"
       value={lastname} 
       onChange={handleLastnameChange}
       autoComplete="family-name" /><br></br>


      <input 
       type="email"
       placeholder="Email"
       id="email"
       value={email} 
       onChange={handleEmailChange}
       autoComplete="email" /><br></br>

      <div className="password-input-container">
       <input
       type={passwordVisible ? "text" : "password"}
       placeholder="Password" 
       id="password"
       value={password}
       onChange={handlePasswordChange}
       autoComplete="new-password" />
       <div className="eye-icon-container">
       <FontAwesomeIcon 
          icon={passwordVisible ? faEye : faEyeSlash}
          className="eye-icon"
          onClick={togglePasswordVisibility} />
      </div>
      </div>
       <br></br>
       
      <div className="password-input-container">
       <input 
       type={confirmPasswordVisible ? "text" : "password"}
       placeholder="Confirm Password"
       id="confirmPassword"
       value={confirmPassword} 
       onChange={handleConfirmPasswordChange}
       autoComplete="new-password"/>
       <div className="eye-icon-container">
        <FontAwesomeIcon
         icon={confirmPasswordVisible ? faEye : faEyeSlash}
         className="eye-icon"
         onClick={toggleConfirmPasswordVisibility} />
       </div>
      </div><br></br>
      <p style={{color:'#25666a'}}>Password to meet complexity requirements</p>

      <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>

      <span onClick={toggleModal} style={{marginLeft:'125px', cursor:'pointer'}}>Terms & Conditions</span>
      {showModal && <Tnc showModal={showModal} closeModal={closeModal} />}<br></br>




      <Link
        style={{ textDecoration: "none", color: "black" }} to="/login"
          // onClick={
        disabled={
          isPasswordValid(password) && 
          password === confirmPassword && 
          isEmailValid(email) && 
          isNameValid(firstname) &&
          isNameValid(lastname)}>
        <button disabled={
          !isPasswordValid(password) || 
          password !== confirmPassword || 
          !isEmailValid(email) ||
          !isNameValid(firstname) ||
          !isNameValid(lastname) ||
          isButtonDisabled}
          onClick={handleSignUp}>Sign Up</button>
      </Link>

      <p className="login-link">
        <Link style={{textDecoration:'none', color:'black'}} to="/login"
        onClick={switchToLogin}>I'm a member.Login</Link>
      </p>
    </div>
    </form>
    </Row>

    <Row>
      <div className=" d-flex justify-content-center"><Footer/></div>
    </Row>
    </>
  );
};

export default SignUpForm;