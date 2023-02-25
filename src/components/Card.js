import React from 'react'
import  Button  from 'react-bootstrap/Button'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function Card(props) {
  const price=props.prices;
  const navigate=useNavigate();
  const { loginWithRedirect, isAuthenticated} = useAuth0();
  const checkoutPage1=()=>{
    const value=isAuthenticated;
    value ? navigate(`/CheckoutStay/${props.check_in}/${props.check_out}/${price}`)  : loginWithRedirect();
      
}
  return (
    <div className='box1'>
        
        <div className="first">
            <p>Hotel:</p>
            <h3>{props.hotel_name}</h3>
            <p>City :</p>
            <h3>{props.places}</h3>
            <p>Rating:</p>
            <h3>{props.rating}</h3>
            </div>
            <div className="second">
                <p>CHECK-IN</p>
                <h3>{props.check_in}</h3>
                <p>CHECK-OUT</p>
                <h3>{props.check_out}</h3>
            </div>
            <div className="third">
                <p>Price per night:</p>
                <h3>{props.prices}</h3>
                <p>Room:</p>
                <h3>{props.room_type}</h3>
                <p>Guests:</p>
                <h3>{props.guest}</h3>
            </div>
            <div className="fourth">
                <Button className='btn112' onClick={checkoutPage1}>Book</Button>
            </div>
      
    </div>
  )
}

export default Card
