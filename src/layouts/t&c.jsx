import React from 'react';

function Tnc({showModal, closeModal}) {
    const handleCloseModal = () => {
        closeModal();};
  return (
    showModal && (
    <div className="modal">
        <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h4 style={{textAlign:'center'}}>SwiftPark<sup>TM</sup></h4>
        <p>Our standard working hours are from 0500 hrs to 2300hrs.
           Users are required to vacate their parking slot at the
            specified departure time. Failure to do so may result 
            in automatic charges being applied to the user's account
            or suspension of the same account. Refunds for cancellations
            will be processed according to our refund policy. For further
            information, please contact us</p>
        </div>
    </div>
    )
  );
}

export default Tnc;