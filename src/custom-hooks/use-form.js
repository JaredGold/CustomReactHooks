import { useState, useEffect } from "react";

const useForm = (options) => {
  const { defaultValues, onSubmit, validate } = options;
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    setValues((values) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    // if(event) {
    //     event.preventDefault()
    // }
    // event?.preventDefault();
    event && event.preventDefault();
    let formErrors = validate(values)
    setIsSubmitting(true)
    setErrors(formErrors)
  };
  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmitting){
      onSubmit()
    }
  },[errors])


  return { values, handleChange, handleSubmit , errors};
};

export default useForm;
