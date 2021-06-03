import React from "react";
import FlexContainer from "./components/styled-components/FlexContainer"
import PaymentForm from "./components/PaymentForm"


const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ alignSelf: "center" }}>Payment Calculator</h1>
      <FlexContainer>
        <PaymentForm />
        <div>
          <h3>Your payment is:</h3>
        </div>
      </FlexContainer>
    </div>
  );
};

export default App;

