import React, { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import './pages.css';

function Profile({showModal, closeModal}) {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname,setLastname]=useState();
  const [email,setEmail]=useState();
  const [userID,setUserID]=useState();
  const [message, setMessage] = useState('');

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  }; 
  
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isNameValid = (name) => /^[a-zA-Z]+$/.test(name); 

  const isEmailValid = (email) => /^[^\s@]+@(gmail\.com|yahoo\.com)$/i.test(email);

  useEffect(()=>{
    const token= Cookies.get('userData');
    const decoded = jwtDecode(token);
    setFirstname(decoded.firstname);
    setLastname(decoded.lastname);
    setEmail(decoded.email);
    setUserID(decoded.userID);
  },[])

  const handleLogout = async()=>{
    try{
    const response = await axios.post('http://localhost:5000/user/logout',
      Cookies.remove('userData'),
      navigate('/'),);
      console.log('Response:', response.data);
      setMessage('Logout successfull');
    }catch(error){setMessage('an error occurred while logging out');}
    }

  const handleEdit=async()=>{
    try {
      const token = Cookies.get('userData');
      const decoded = jwtDecode(token);

      const hasChanges =
      firstname !== decoded.firstname ||
      lastname !== decoded.lastname ||
      email !== decoded.email;

    if (!hasChanges) {
      alert("No changes made. Please edit at least one field.");
      return;
    }

      if (!isNameValid(firstname) || !isNameValid(lastname)) {
        alert("Invalid first name or last name.");
        return;
      }
      if (!isEmailValid(email)) {
        alert("Invalid email address");
        return;
      }

      console.log(firstname,lastname,email,userID);
      const response= await axios.patch(`http://localhost:5000/user/editProfile/${userID}`,{
        firstname:firstname,
        lastname:lastname,
        email:email,
        userID:userID
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('userData')}`,
       },})
      if(response) {
        console.log(response)
        setMessage('User profile updated successfully');
      }
    } catch (error) {
      setMessage('Error updating user profile');}
  }
const handleCloseModal = () => {
  closeModal();
};

  return (
      showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Edit Profile</h2>
            <form>
              <label htmlFor="firstname">Firstname</label>
              <input type="text" id="firstname"
               value={firstname} onChange={handleFirstnameChange} autoComplete="given-name"/><br />

              <label htmlFor="lastname">Lastname</label>
              <input type="text" id="lastname"
               value={lastname} onChange={handleLastnameChange} autoComplete="family-name"/><br />

              <label htmlFor="email">Email</label>
              <input type="email" id="email"
               value={email} onChange={handleEmailChange} autoComplete="email"/><br />

              <button style={{marginLeft:'1px', width:'70px'}} type="button"
               onClick={handleEdit}>Edit</button>
               <div className="message-container">
                <p style={{ color: 'red' }}>{message}</p>
               </div>
              {/* <button style={{marginLeft:'10px', width:'190px', height:'70px'}} type="button"
              onClick={handleReservationCancelling}>Cancel Reservation</button> */}
              <Link to="/">
              <button style={{marginLeft:'10px',width:'70px'}} type="button"
              onClick={handleLogout}>Logout</button>
              <div className="message-container">
                <p style={{ color: 'red' }}>{message}</p>
              </div>
              </Link>
            </form>
          </div>
        </div>
      )
  );
}

export default Profile;





















// const adminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   if (email === adminConfig.adminEmail && password === adminConfig.adminPassword) {
//     res.json({ message: 'Admin login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// };























