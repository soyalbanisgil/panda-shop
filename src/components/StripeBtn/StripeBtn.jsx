import React from 'react';
import Logo from '../../assets/logo.png';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jPphAubfqcC5Upv57CjvqD25';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Panda Shop'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeBtn;
