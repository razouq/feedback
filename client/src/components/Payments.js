import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux';
import {handleToken} from '../actions';

const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Feedback"
      description="$5 for 5 email credits"
      // 5$
      amount={500}
      // the token that we get back from stripe
      token={token => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
}

export default Payments;