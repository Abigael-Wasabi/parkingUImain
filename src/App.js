import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from './components/admin';
import AdminLogin from './components/adminL';
import AdminSign from './components/adminS';
import Admindashboard from './components/admindash';
import LogSign from './components/logsign';
import LoginForm from './components/login';
import SignUpForm from './components/signup';
import CompContainer from './components/container';
import Boking from './components/booking';
import Parking from './components/parking';
import Profile from './pages/profile';
import Home from './pages/home';
import About from './pages/about';
import Fpassw from './pages/fp';
import Resetp from './pages/resetp';


function App() { 

  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/logsign" element={<LogSign/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/adminsignup" element={<AdminSign/>} />
          <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<CompContainer/>}/>
          <Route path="/booking" element={<Boking/>}/>
          <Route path="/parking" element={<Parking/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgot-password" element={<Fpassw/>}/>
          <Route path="/resetpassword" element={<Resetp/>}/>
        </Routes>
      </Router>
    </div>
  );
} 

export default App;