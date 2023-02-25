import React from 'react';
import "./Navbar.css";
import logo from "./logo.svg"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
const navigate=useNavigate();
const clickedStay=()=>{
  navigate("/");

}
const clickedFlight=()=>{
  navigate("/Flight")
}
const clickedImg=()=>{
  navigate("/");
}



  return (
    <>
        <div className="head2">
          <div className="head21">
           <Button className='imgbtn' onClick={clickedImg}> <img className='img' src={logo} alt="booking.com_image" /></Button>
           
            <Button className='btn1' onClick={clickedStay}>Stays</Button>
            <Button className='btn2' onClick={clickedFlight}>Flights</Button>
            {isAuthenticated && <p className='user'>{user.name.slice(0, -10)}</p>}
            {isAuthenticated ?

              <Button className='login' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
              :
              <Button className='login' onClick={() => loginWithRedirect()}>Login</Button>
            }
            
          </div>
        </div>
    </>
  )
}

export default Navbar
