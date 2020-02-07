import React from 'react';
import { useForm } from 'react-hook-form'
// import logo from './logo.svg';
import './app.css';

function App() {

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

export default App;

  /* return (
    <div className="App">
      <header className = "App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          Currently using React {React.version}
        </p>
        <a
          className = "App-link"
          href = "https://reactjs.org"
          target = "_blank"
          rel = "noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */



