import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HuFmzJaH1m15hUyJ1HMFns2EqkxxtF4sUf3fA1438MPXFbxNZEwwV9bS3JAjIkxPQTUJFShYS4evhSIbcff0X8j00CdknCtAl'

    const onToken = token =>{
        console.log(token);
        alert('Payment successful')
    }
    return(
        <StripeCheckout 
        currency = "BGN"
        label = 'Pay Now'
        name = '3D World Bulgaria'
        billingAddress
        shippingAddress
        image = ''
        description = {`Your total is: ${price} BGN`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}

        />
    )
}

export default StripeCheckoutButton;