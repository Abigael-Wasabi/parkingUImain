import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './parking.css';
import axios from 'axios';
import NavBar from '../layouts/navbar';
import Footer from '../layouts/footer';
import MpesaPaymentModal from './mpesa';
// import './booking.css';

function Paking() {
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [carType, setCarType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [allocatedSlot, setAllocatedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [isPaymentMade, setIsPaymentMade] = useState(false);
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const openMpesaModal = (calculatedAmount) => {
    setCalculatedAmount(calculatedAmount);
    setShowMpesaModal(true);
  };

  const closeMpesaModal = () => {
    setShowMpesaModal(false);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentMade(true);
  };

  const handleArrivalTimeChange = (event) => {
    const selectedTime = event.target.value;
    const minTime = "05:00";
    const maxTime = "22:00";
  if (selectedTime >= minTime && selectedTime <= maxTime) {
    setArrivalTime(event.target.value);
    checkAllFieldsFilled();
  }else{
    alert("working hours violation");
  }};

  const handleDepartureTimeChange = (event) => {
    const selectedTime = event.target.value;
    const minTime = "06:00";
    const maxTime = "23:00";
  if (selectedTime >= minTime && selectedTime <= maxTime) {
    setDepartureTime(event.target.value);
    checkAllFieldsFilled();
  }else{
    alert("working hours violation");
  }};

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    checkAllFieldsFilled();
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
    checkAllFieldsFilled();
  };

  const checkAllFieldsFilled = () => {
    const allFieldsFilled =
      arrivalTime !== '' &&
      departureTime !== '' &&
      carType !== '' &&
      registrationNumber !== '';
    setAllFieldsFilled(allFieldsFilled);
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:5000/park/checkAvailableSlots');
      setAvailableSlots(response.data.availableSlotsCount);
      console.log(response.data);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  const allocateSlot = async () => {
    try {
      const response = await axios.get('http://localhost:5000/park/allocateRandomSlot', {
        params: {
          carType: carType.trim(),
        }, 
      });
      setAllocatedSlot(response.data.parkingSlot.parkingSlotNumber);
      alert(`parking slot alocated:${response.data.parkingSlot.parkingSlotNumber}`);
      console.log(`parking slot alocated:${response.data.parkingSlot.parkingSlotNumber}`)
    } catch (error) {
      console.error('Error allocating slot:', error);
    }
  };

  const enterParkingDetails = async () => {
    try {
      const response = await axios.post('http://localhost:5000/park/enterParkingDetails', {
        arrivalTime: arrivalTime,
        departureTime: departureTime,
        carType: carType,
        registrationNumber: registrationNumber,
      });
      console.log(response.data);
      if (response.data.message === 'Parking details entered successfully.') {
        setAlertMessage('Parking details entered successfully.');
        const serverCalculatedAmount = response.data.parkingFee;
        setCalculatedAmount(serverCalculatedAmount);
        setShowMpesaModal(true); // mpesa opens after successful
      } else {
        setAlertMessage('Error entering parking details.');
      }
    } catch (error) {
      console.log('Error entering parking details:', error);
      setAlertMessage('Error entering parking details.');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
    <NavBar/>
    <div className=" d-flex justify-content-center"><Footer/></div>
      <div className=" paking">
      <h3 style={{ textAlign: 'center', fontSize: '15px' }}>find your spot, park on the dot</h3>

      <label>Arrival Time</label><br />
      <input
        type="time"
        value={arrivalTime}
        onChange={handleArrivalTimeChange}
        min="05:00"
        max="22:00" /><br /> 

      <label>Departure Time</label><br />
      <input
        type="time"
        value={departureTime}
        onChange={handleDepartureTimeChange}
        min="06:00"
        max="23:00" /><br />

      <label>Car Type</label><br />
      <select value={carType} onChange={handleCarTypeChange}>
        <option value="">Select Car Type</option>
        <option value="2wheeler">2wheeler</option>
        <option value="4wheeler">4wheeler</option>
        <option value="4+wheeler">4+wheeler</option>
      </select><br />

      <label>Registration Number</label><br />
      <input type="text" value={registrationNumber} onChange={handleRegistrationNumberChange} /><br />

      <button
        style={{ width: '100%', marginLeft: '0px' }}
        onClick={checkAvailability}>Check Availability
      </button>
      {availableSlots !== null && <h6 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'normal' }}>Available Slots: {availableSlots}</h6>}

      <button
        style={{ width: '100%', marginLeft: '0px' }}
        onClick={enterParkingDetails}
        disabled={!allFieldsFilled || isPaymentMade}>Submit
      </button>

      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'normal', marginTop: '10px' }}>
        {alertMessage}
      </div>

      <button
        style={{ width: '100%', marginLeft: '0px' }}
        onClick={allocateSlot}
        disabled={!allFieldsFilled}>Hold a Spot
      </button>

      {allocatedSlot !== null && <h6 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'normal' }}>Allocated Slot: {allocatedSlot}</h6>}

      <Modal show={showMpesaModal} onHide={closeMpesaModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mpesa Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MpesaPaymentModal
            calculatedAmount={calculatedAmount}
            onClose={closeMpesaModal}
            onPaymentSuccess={handlePaymentSuccess} />
        </Modal.Body>
      </Modal>

      
      </div>
      </div>
    </div>
  );
}

export default Paking;