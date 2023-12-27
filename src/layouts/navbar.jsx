import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
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
    return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand>SwiftPark</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link onClick={toggleCModal}>Contact</Nav.Link>
          <Nav.Link onClick={toggleModal}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
{showCModal && <Contact showCModal={showCModal} closeCModal={closeCModal} />}
{showModal && <Profile showModal={showModal} closeModal={closeModal} />}
    </Navbar>
    );
};
export default NavBar;

