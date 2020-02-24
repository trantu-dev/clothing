import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = price => {
  const pubKey = 'pk_test_zh7g6ZTRMTjBVK9HBUvTTlJb00CTvA4zvG';
  const priceForStrike = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment successul');
  };

  return (
    <StripeCheckout
      name="Clothing"
      panelLabel="Give Money"
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Total: ${price}`}
      amount={priceForStrike}
      token={onToken}
      stripeKey={pubKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
