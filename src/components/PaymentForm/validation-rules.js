const validate = (values) => {
  let errors = {};
  if(values.income === "") {
    errors.income = "Income field cannot be empty"
  }

  if(values.payment === ""){
    errors.payment = "Payment field cannot be empty"
  }

  return errors
}

export default validate