import React from 'react'
import {Form, Label, Input, Button} from './styled-components/index'

const PaymentForm = (props) => {
  return(
    <Form>
      <Label htmlFor="income">Income:</Label>
      <Input id="income" type="number" />
      <Label htmlFor="payment">Payment:</Label>
      <Input id="payment" type="number" />
      <Button color="#FFb6c1" type="submit">Calculate</Button>
    </Form>
  )
}

export default PaymentForm