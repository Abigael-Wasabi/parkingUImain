import React, {useState} from 'react';
import NavB from '../layouts/navB';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [slots, setSlots] = useState([]);
  const [cars, setCars] = useState([]);
  const [userID] = useState("");
  const [firstname] = useState("");
  const [lastname] = useState("");
  const [email] = useState("");
  const [parkingSlotID] = useState("");
  const [parkingSlotNumber] = useState("");
  const [parkingSlotStatus] = useState("");
  const [carID] = useState("");
  const [arrivalTime] = useState("");
  const [departureTime] = useState("");
  const [carType] = useState("");
  const [registrationNumber] = useState("");



  const checkUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/users',{
        params:{
          userID:userID,
          firstname:firstname,
          lastname:lastname,
          email:email,
        }
      });
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error);
      alert("Error displaying users");
    }
  };

  const checkSlots = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/slots',{
        params:{
          parkingSlotID:parkingSlotID,
          parkingSlotNumber:parkingSlotNumber,
          parkingSlotStatus:parkingSlotStatus
        }
      });
      setSlots(response.data)
    } catch (error) {
      console.error('Error fetching users:', error);
      alert("Error displaying users");
    }
  };

  const checkCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/cars',{
        params:{
          carID:carID,
          arrivalTime:arrivalTime,
          departureTime:departureTime,
          carType:carType,
          registrationNumber:registrationNumber
        }
      });
      setCars(response.data)
    } catch (error) {
      console.error('Error fetching cars:', error);
      alert("Error displaying cars");
    }
  };
  return (
    <div className='container admin'>
        <NavB/>
        <Table bordered striped responsive>
        <th colSpan='3' className='text-center'>
          <button onClick={checkUsers} style={{backgroundColor: '#25666a'}}>Check users details</button></th>
          <tr>
            <th>userID</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
          </tr>
          <tbody>
            {users.map((user) => (
              <tr key={user.userID}>
                <td>{user.userID}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
          </Table>

          <Table bordered striped responsive>
        <th colSpan='3' className='text-center'>
          <button onClick={checkSlots} style={{backgroundColor: '#25666a'}}>Check slots details</button></th>
          <tr>
            <th>slotID</th>
            <th>Slot Number</th>
            <th>Slot Status</th>
          </tr>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.slotID}>
                <td>{slot.parkingSlotID}</td>
                <td>{slot.parkingSlotNumber}</td>
                <td>{slot.parkingSlotStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table bordered striped responsive>
        <th colSpan='4' className='text-center'>
          <button onClick={checkCars} style={{backgroundColor: '#25666a'}}>Check cars details</button></th>
          <tr>
            <th>carID</th>
            <th>arrival time</th>
            <th>departure time</th>
            <th>car type</th>
            <th>registrationNumber</th>
          </tr>
          <tbody>
            {cars.map((car) => (
              <tr key={car.carID}>
                <td>{car.carID}</td>
                <td>{car.arrivalTime}</td>
                <td>{car.departureTime}</td>
                <td>{car.carType}</td>
                <td>{car.registrationNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div> 
  )
}

export default AdminDashboard;