import React from 'react';

const PaymentDisplay = (props) => {
  const {payment} = props;
  
  return(
    <div>
      <h3>Your payment is: </h3>
      <h3>{payment}</h3>
    </div>
  )
}

export default PaymentDisplay