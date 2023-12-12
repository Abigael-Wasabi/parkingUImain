import React, {useState} from "react";
import SignUpForm from './adminS';
import LoginForm from "./adminL"
import FooTer from "../layouts/footer";

const Admin =()=>{

  const [showLogIn, setShowLogIn] = useState(false);
  
  const switchForm = () => {
  setShowLogIn(!showLogIn);
};

return (
  <div className="app-background">
    {showLogIn?(<LoginForm switchToSignUp={switchForm} />):
    (<SignUpForm switchToLogin={switchForm} />)}
    <FooTer/>
  </div>
);
};

export default Admin;