const calculatePayment = (incomeInput, paymentInput) => {
  let income = Number(incomeInput);
  let payment = Number(paymentInput);

  while(income > 0){
    if(income > 256){
      payment -= 0.6
    } else if (income > 150){
      payment -= 0.5
    }
    if (payment < 0){
      payment = 0;
      break;
    }
    income -= 1;
  }
  return payment;
};

export default calculatePayment;