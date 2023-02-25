import React from 'react'
import "./CheckoutFlight.css"
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate,useParams} from "react-router-dom"

function CheckoutFlight() {
    const {price}=useParams();
    const navigate=useNavigate();
    const onToken = () => {
       navigate("/");
    }
    return (
        <div>
            <h2 className='fare'>Fare Summary</h2>
            <div className="details">


                <div className="summary">
                    <h4>Base Fare</h4>
                    <hr />
                    <h4>Fee & Subcharges</h4>
                    <hr />
                    <h4>Total Amount</h4>

                </div>
                <hr />
                <div className="summary1">
                    <p className='p'>{price}</p>
                    <hr />
                    <p className='p'>500</p>
                    <hr />
                    <p className='p'>{Number(price)+500}</p>
                </div>

                <hr />

            </div>
            {/* <Button className='paybtn'>Pay</Button> */}
            <StripeCheckout
            amount={(Number(price)+500)*100}
            currency='INR'
                token={onToken}
                stripeKey="pk_test_51MewYKSEJ5oE1A839XQoHRMC1AD9fnrFkBmt1fnW0KbVFewtiO9Yl0qmrvs6t21Y6BnGMcZ2amlucsCefaQXoT7U00nMAORTVT"
            />
        </div>
    )
}

export default CheckoutFlight
