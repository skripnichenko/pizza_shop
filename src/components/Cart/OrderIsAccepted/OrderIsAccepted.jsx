import React from 'react';
import { Link } from 'react-router-dom';


const OrderIsAccepted = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Your order has been accepted <i>😁</i>
            </h2>
            <p>
                Wait for the courier to call.
                <br />
                Have a nice day!
            </p>
            <br />
            <Link to="/" className="button button--black">
                <span>Go back</span>
            </Link>
        </div>
    )
}
export default OrderIsAccepted
