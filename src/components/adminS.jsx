/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import NavB from '../layouts/navB';
import Footer from '../layouts/footer';
import axios from 'axios';
import './signup.css';

const AdminSign = ({switchToLogin}) => {
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
    const emailRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)*@swiftpark\.com$/;
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
      const response= await axios.post('http://localhost:5000/admin/signup', {
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
         navigate("/adminlogin");
      }catch(err){
        if (err.response && err.response.status === 400) {
          setErrorMessage('Only one admin is allowed');
          console.log(err.response.data.message);}
        else {
          setErrorMessage('An error occurred. Please try again later.');}
          console.log(err.message);} 
        finally {
          updateButtonState(email, password, errorMessage);}
        };
  return (
    <form onSubmit={handleSignUp}>
    <div className="SignUpForm">
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <h5 style={{textAlign: 'center'}} className="app-title">@admin</h5>
      <div style={{display: 'flex'}}>
        <Link to="/admin"><button style={{backgroundColor:'#daf3ef',  width:'80px'}}>ADMIN</button></Link>
        <Link to="/signup"><button style={{backgroundColor:'#daf3ef',  width:'80px', marginLeft:'10px'}}>USER</button></Link>
      </div>
      <div style={{marginTop:'30px'}} className="inputts">
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

      <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>


      <Link
        style={{ textDecoration: "none", color: "black" }} to="/adminlogin"
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

      <p className="signup-link">
        <Link style={{textDecoration:'none', color:'black'}} to="/adminlogin"
        onClick={switchToLogin}>Login</Link>
      </p>
    </div>
    <NavB/>
    <div className=" d-flex justify-content-center"><Footer/></div>
    </form>
  );
};

export default AdminSign;





// import React from 'react'

// const Services = () => {
//   return (
//     <div className="bg-purple-f">
//     <h2 className="text-black-a text-3xl font-bold text-center p-4 pt-10">Services we offer</h2>
//     <div className="flex justify-center px-8 pt-4">
//       {servicesData.map((service, index) => (
//         <div className="flex-1 p-4 text-center" key={index}>
//           <div className="bg-white-a rounded-lg p-4 h-full w-25 flex flex-col justify-between shadow-lg">
//             <div className="bg-purple-dark-hover rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center" style={{ paddingTop: '12px' }}>
//               <img src={service.icon} alt={service.title} className="w-8 h-8" />
//             </div>
//             <div>
//               <h3 className="text-purple-normal-active  font-bold mb-2">{service.title}</h3>
//               <p className="text-black-a">{service.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="text-center font-bold h-20">
//       <SingleClick buttonClass="1" buttonText="See More" buttonType='button'/>
//     </div>
//   </div>
// );
// };

// export default Services;




