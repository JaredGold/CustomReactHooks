import React, {useState} from "react";
import FlexContainer from "./components/styled-components/FlexContainer"
import PaymentForm from "./components/PaymentForm"
import PaymentDisplay from "./components/PaymentDisplay"


const App = () => {
  const [payment, setPayment] = useState(null)

  const setPaymentValue = (paymentValue) => setPayment(paymentValue)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ alignSelf: "center" }}>Payment Calculator</h1>
      <FlexContainer>
        <PaymentForm setPaymentValue={setPaymentValue} />
        <PaymentDisplay payment={payment}/>
      </FlexContainer>
    </div>
  );
};

export default App;

