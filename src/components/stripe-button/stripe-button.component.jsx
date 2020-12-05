import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    alert('Плащането е успешно!');
  };

  return (
    <StripeCheckout
      currency = 'BGN'
      label='Плати'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Обща сума: ${price}лв.`}
      amount={priceForStripe}
      panelLabel='Плати'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
