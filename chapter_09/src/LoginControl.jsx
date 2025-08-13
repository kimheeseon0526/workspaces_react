import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl(props) {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if(isLoggedIn) {
    button = <LogoutButton handleLoginClick = {handleLoginClick} />;
  }
  else {
    button = <LoginButton handleLogoutClick = {handleLogoutClick} />;
  }

  return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
  )
}
export default LoginControl;