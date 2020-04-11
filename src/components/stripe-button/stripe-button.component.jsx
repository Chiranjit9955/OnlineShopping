import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey = "pk_test_ojFa0DNhBiHKRIpUBr4pmPrK00Uh5Bau20";

  // As we are test so just log, we are not accessing the backend
  const onToken = token => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      // name of the application you can give
      name="CJ Private Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is INR: ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
      currency="INR"
    />
  );
};

export default StripCheckoutButton;
