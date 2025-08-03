import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('you-publishable-key-here');

const StripeProvider = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    );
};

export default StripeProvider;