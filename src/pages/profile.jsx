// import React, { useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate} from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';
// import './pages.css';

// function Profile({showModal, closeModal}) {
// const navigate = useNavigate();
// const [firstname, setFirstname] = useState('');
// const [lastname,setLastname]=useState('');
// const [email,setEmail]=useState('');
// const [userID,setUserID]=useState('');
// const [password,setPassword]=useState('');
// const [session,setSession]=useState('');//default value

// const handleCloseModal = () => {
//   closeModal();
// };

// //event handling funcs
// const handleFirstnameChange = (event) => {
//   setFirstname(event.target.value);
// }; 

// const handleLastnameChange = (event) => {
//   setLastname(event.target.value);
// };

// const handleEmailChange = (event) => {
//   setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };

// const handleSessionChange = (event) => {
//   setSession(event.target.value);
// };

//   // Empty dependency array ensures this effect runs once when the component mounts
// //once comp is created
// useEffect(()=>{
//   const fetchUserDetails = async () => {
//     try{
//       const token = Cookies.get('token');
//       const decodedToken = jwtDecode(token);
//       console.log('Token:', token);
//       console.log('decodedToken:', decodedToken);
//       setUserID(decodedToken.userID);

//       if (decodedToken.userID){
//       const response = await axios.get(`http://localhost:5000/user/profile/:${decodedToken.userID}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,//actual token retrieval logic
//       },
//     });console.log(response.data);

//       const userData = response.data.user; 
//       setFirstname(userData.firstname);
//       setLastname(userData.lastname);
//       setEmail(userData.email);
//       setPassword(userData.password);
//       setSession(userData.session || '');
//       console.log('Stored Token:', Cookies.get('token')); 
//     } }catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };
//     fetchUserDetails();
//   },[userID]);
// //!fetch details whwnever ID changes


// // useEffect(() => {
// //   const token = Cookies.get('token');
// //   const decodedToken = jwtDecode(token);
// //   setUserID(decodedToken.userID);
// // }, []);// Empty dependency array ensures this effect runs once when the component mounts


// // const fetchUserDetails = async () => {
// // try {
// // const response = await axios.get(`http://localhost:5000/user/profile/${userID}`, {
// //   headers: {
// //     Authorization: `Bearer ${Cookies.get('token')}`,//actual token retrieval logic
// //   },
// // });

// // const userData = response.data.user; 
// // setFirstname(userData.firstname);
// // setLastname(userData.lastname);
// // setEmail(userData.email);
// // setPassword(userData.password);
// // setSession(userData.session || '');
// // console.log('Stored Token:', Cookies.get('token'));
// // } catch (error) {
// // console.error('Error fetching user details:', error);
// // }
// // };

// // fetchUserDetails();

// const handleEditProfile = async () => {
//   try {
//       const token = Cookies.get('token');
//       const decodedToken = jwtDecode(token);
//       const response = await axios.patch(`http://localhost:5000/user/editProfile/${decodedToken.userID}`, {
//       firstname,lastname,email,password},
//       {
//         headers: {
//           Authorization: `Bearer ${Cookies.get('token')}`,
//         },});
//     console.log(response.data);
//     alert('Profile update successful');
//   }catch (error) {
//     console.error('Error updating user details:', error);
//     alert('error updating profile');
//   }};

//   const handleReservationCancelling = async () => {
//     try {
//       const response = await axios.delete('http://localhost:5000/car/cancelReservation');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await axios.delete('http://localhost:5000/user/logout');
//       localStorage.removeItem('userID');
//       Cookies.removeItem('userID');
//       console.log(response.data);
//       navigate('/');
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//       showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={handleCloseModal}>&times;</span>
//             <h2>Edit Profile</h2>
//             <form>
//               <label htmlFor="firstname">Firstname</label>
//               <input type="text" id="firstname" value={firstname} onChange={handleFirstnameChange} placeholder="First" autoComplete="given-name"/><br />

//               <label htmlFor="lastname">Lastname</label>
//               <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange} autoComplete="family-name"/><br />

//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="email"/><br />

//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="current-password"/><br />

//               <label htmlFor="session">Session</label>
//               <input type="text" id="session" value={session} onChange={handleSessionChange}/><br/>
 
//               <button style={{marginLeft:'10px', width:'100px'}} type="button"
//               onClick={handleEditProfile}>Edit</button>
//               <button style={{marginLeft:'10px', width:'100px'}} type="button"
//               onClick={handleReservationCancelling}>Cancel Reservation</button>
//               <button style={{ width:'100px'}} type="button"
//               onClick={handleLogout}>Logout</button>
//             </form>
//           </div>
//         </div>
//       )
//   );
// }

// export default Profile;






import React, { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
// import API_URL from '../config/port';
import './pages.css';

function Profile({showModal, closeModal}) {
const navigate = useNavigate();
const [firstname, setFirstname] = useState('');
const [lastname,setLastname]=useState('');
const [email,setEmail]=useState('');
const [userID,setUserID]=useState('');
const [password,setPassword]=useState('');
const [session,setSession]=useState('');//default value

const handleCloseModal = () => {
  closeModal();
};

//event handling funcs
const handleFirstnameChange = (event) => {
  setFirstname(event.target.value);
}; 

const handleLastnameChange = (event) => {
  setLastname(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleSessionChange = (event) => {
  setSession(event.target.value);
};

useEffect(() => {
        const token = Cookies.get('token');
        const decodedToken = jwtDecode(token);
        setUserID(decodedToken.userID);
    }, []);// Empty dependency array ensures this effect runs once when the component mounts


  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/profile/${userID}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,//actual token retrieval logic
        },
      });

      const userData = response.data.user; 
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      setPassword(userData.password);
      setSession(userData.session || '');
      console.log('Stored Token:', Cookies.get('token'));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  fetchUserDetails();

const handleEditProfile = async () => {
  try {
    // const storedTokenKey = localStorage.getItem('yourStoredTokenKey');
    const response = await axios.put(`http://localhost:5000/user/editProfile/${userID}`, {
      firstname,lastname,email,password,session,},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },});
    console.log(response.data);
    alert('Profile update successful');
  }catch (error) {
    console.error('Error updating user details:', error);
    alert('error updating profile');
  }};

  const handleReservationCancelling = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/car/cancelReservation');
      console.log(response.data);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/user/logout');
      localStorage.removeItem('userID');
      console.log(response.data);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
      showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Edit Profile</h2>
            <form>
              <label htmlFor="firstname">Firstname</label>
              <input type="text" id="firstname" value={firstname} onChange={handleFirstnameChange} placeholder="First" autoComplete="given-name"/><br />

              <label htmlFor="lastname">Lastname</label>
              <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange} autoComplete="family-name"/><br />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="email"/><br />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="current-password"/><br />

              <label htmlFor="session">Session</label>
              <input type="text" id="session" value={session} onChange={handleSessionChange}/><br/>
 
              <button style={{marginLeft:'10px', width:'100px'}} type="button"
              onClick={handleEditProfile}>Edit</button>
              <button style={{marginLeft:'10px', width:'100px'}} type="button"
              onClick={handleReservationCancelling}>Cancel Reservation</button>
              <button style={{ width:'100px'}} type="button"
              onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      )
  );
}

export default Profile;