import React, { useState } from 'react';
import axios from 'axios';

function MpesaPaymentModal({ calculatedAmount, onClose, onPaymentSuccess }) {
  const [phone, setPhone] = useState('');

  const payHandler = async () => {
    try {
      const response = await axios.post('http://localhost:5000/mpesa', {
        amount:calculatedAmount,
        phone,
      });
      console.log('Payment response:', response.data);
      console.log('Payment initiated. Amount:', calculatedAmount);
      onPaymentSuccess();
      onClose();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  // Prevent re-render when the parent component re-renders
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="mpesa-payment-modal">
      <form>
        <label>Amount</label><br/>
        <input type="text" value={calculatedAmount} readOnly/><br/>
        
        <label>Phone</label><br />
        <input type="text" value={phone} onChange={handlePhoneChange}/><br />

        <div style={{ marginRight:'100px', width:'10px'}}>
          <button style={{marginLeft:'60px'}} type="button" onClick={payHandler}>Pay</button>
        </div>
      </form>
    </div>
  );
}

export default MpesaPaymentModal;
//server already calculated the parking fee,no need to make a separate request