import React from 'react'
import "./CheckoutStay.css";
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate,useParams} from "react-router-dom"

function CheckoutStay() {
    const {toDate,fromDate,price}=useParams();
    const navigate=useNavigate();
    const onToken = () => {
       navigate("/");
    }
    const to=Number(toDate.slice(8));
    const from=Number(fromDate.slice(8));
    console.log(to);
    console.log( typeof from);
    console.log(from-to);
    const num1=from-to;
  return (
    <div>
      <h2 className='fare'>Fare Summary</h2>
            <div className="details">


                <div className="summary">
                    <h4>Price per night</h4>
                    <hr />
                    <h4>Number of days</h4>
                    <hr />
                    <h4>Total Amount</h4>

                </div>
                <hr />
                <div className="summary1">
                    <p className='p'>{price}</p>
                    <hr />
                    <p className='p'>{num1}</p>
                    <hr />
                    <p className='p'>{price*num1}</p>
                </div>

                <hr />

            </div>
            {/* <Button className='paybtn'>Pay</Button> */}
            <StripeCheckout
            amount={price*num1*100}
            currency='INR'
                token={onToken}
                stripeKey="pk_test_51MewYKSEJ5oE1A839XQoHRMC1AD9fnrFkBmt1fnW0KbVFewtiO9Yl0qmrvs6t21Y6BnGMcZ2amlucsCefaQXoT7U00nMAORTVT"
            />
    </div>
  )
}

export default CheckoutStay
