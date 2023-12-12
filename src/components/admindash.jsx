import React from 'react';
import NavB from '../layouts/navB';

function AdminDashboard() {
  return (
    <div className=' row'>
        <NavB/>
        <div style={{}} className="col-sm-3 admin">
            <button>Check user details</button><br></br>
            <button>Adjust working hours</button><br></br>
            <button>Manage Payment</button><br></br>
            <button>Block</button><br></br></div>
        <div style={{}} className="col-sm-9 admin"></div>
    </div> 
  )
}

export default AdminDashboard;