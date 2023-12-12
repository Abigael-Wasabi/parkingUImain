import React, {useState} from "react";
import SignUpForm from "./signup";
import LoginForm from "./login"
import FooTer from "../layouts/footer";
import NavBar from "../layouts/navbar";

const LogSign =()=>{

  const [showLogIn, setShowLogIn] = useState(false);
  
  const switchForm = () => {
  setShowLogIn(!showLogIn);
};

return (
  <div className="app-background">
    {showLogIn?(<LoginForm switchToSignUp={switchForm} />):
    (<SignUpForm switchToLogin={switchForm} />)}
    <FooTer/>
    <NavBar/>
  </div>
);
};

export default LogSign;