import React from 'react'
import "./FlightCard.css"
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function FlightCard(props) {
    
    const navigate=useNavigate();
    const { loginWithRedirect, isAuthenticated} = useAuth0();

    const checkoutPage=()=>{
        const value=isAuthenticated;
        value ? navigate(`/CheckoutFlight/${props.price}`)  : loginWithRedirect();
          
    }
  return (
    <>
    <div className='boxcontainer'>
        <div className="part1">
            <p>FROM:</p>
            <h3>{props.from}</h3>
            <p>To:</p>
            <h3>{props.to}</h3>

            <p>Airline:</p>
            <h3>{props.airline}</h3>

        </div>
        <div className="part2">
        <p>DEPARTURE</p>
        <h3>{props.departureTime}|{props.departureDate}</h3>

        <p>RETURN</p>
        <h3>{props.returnTime}|{props.returnDate}</h3>


        </div>
        <div className="part3">
        <p>Price</p>
        <h3>{props.price}</h3>

        <p>Via</p>
        <h3>{props.via}</h3>

         
        <p>Duration</p>
        <h3>{props.duration}</h3>


        </div>
        <div className="part4">
            <Button onClick={checkoutPage}>Book</Button>
        </div>
       
    </div>
    </>
  )
}

export default FlightCard
