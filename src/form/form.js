import React from 'react';
import { useForm } from 'react-hook-form'
import '../styles/app.css';

function Form() {

  const { register, handleSubmit, watch, errors } = useForm();
  
  // your form submit function which will invoke after successful validation
  const onSubmit = data => {
    console.log(data);
  }; 
  

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <label>Nombres y Apellidos Completos</label>
      <input name = "example" ref = {register} />
      
      <label>Tipo Documento</label>
      <input
        name = "exampleRequired"
        ref = {register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type = "submit" />
    </form>
  );
}

export default Form;




