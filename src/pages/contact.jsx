import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Contact({showCModal, closeCModal}) {
    const handleCloseCModal = () => {
        closeCModal();};
  return (
    showCModal && (
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={handleCloseCModal}>&times;</span>
            <h4 style={{textAlign:'center'}}>SwiftPark<sup>TM</sup></h4>
            <div className="icons-container">
              <a href="https://www.instagram.com/wasabi_me_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" style={{ marginRight: '60px' }}/></a>
              <a href="https://twitter.com/WasabiAbigael" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="3x" style={{ marginRight: '60px' }}/></a>
                <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ marginRight: '60px' }}/>
                <FontAwesomeIcon icon={faMobile} size="3x" style={{ marginLeft: '10px' }}/>
            </div> 
        </div>
    </div>
    )
  );
}

export default Contact;