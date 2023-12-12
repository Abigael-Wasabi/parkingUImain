import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from '../pages/profile';
import Contact from '../pages/contact';

const NavBar =()=>{
  const [showModal, setShowModal] = useState(false);
  const toggleModal =  () => {
    setShowModal(!showModal);
  }
  const closeModal = () => {
    setShowModal(false);
  };

  const [showCModal, setShowCModal] = useState(false);
  const toggleCModal =  () => {
    setShowCModal(!showCModal);
  }
  const closeCModal = () => {
    setShowCModal(false);
  };

  let imgsrc=require('../assets/logoPark.jpg')

    return (

      <div className="nb fixed-top d-flex justify-content-between align-items-center">
     <h2> <Link to="/adminsignup" className="app-title">SwiftPark</Link></h2>
        <img style={{height:'50px', marginLeft:'0px',borderRadius:'10px', marginRight:'1363px'}} src={imgsrc} alt='logo'></img>
      <div className="d-flex m-3"></div>
      <div className="d-flex m-3">
        <Link to="/" className='me-4'>Home</Link><br></br>
        <Link to="/about" className='me-4'>About</Link><br></br>
        <span className='me-4' onClick={toggleCModal} style={{ cursor: 'pointer' }}>Contact</span>
        <span  onClick={toggleModal} style={{cursor: 'pointer'}}>Profile</span>
        <br></br>
        </div>
      {showCModal && <Contact showCModal={showCModal} closeCModal={closeCModal} />}
      {showModal && <Profile showModal={showModal} closeModal={closeModal} />}

    </div>
    );
};
export default NavBar;

