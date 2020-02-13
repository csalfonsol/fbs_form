// Librerias
import React from 'react';
import { useForm, FormContext } from 'react-hook-form'

// Layout
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Elementos
import Label from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

// Componentes formulario
import InformacionPersonalFuncionario from './section1';
import ReferenciasFamiliares from './section2';



function Main() {

  const methods = useForm();
  const { register, handleSubmit } = methods;
  
  // Funcion que se ejecuta al enviar el frmulario, si las validaciones son exitosas
  const onSubmit = data => {
   
    // console.log(data);
    alert(JSON.stringify(data));
  }; 

  // console.log(watch("nombres")); // Se puede usar watch para ver el valor del item pasado por parametro

  return (

    <Container fluid>

      <h2 className="text-center mb-5">SOLICITUD DE CRÉDITO</h2> {/*Encabezado del formulario*/}    
 
      <FormContext {...methods}>
        <Form onSubmit = {handleSubmit(onSubmit)} >
                    
          <InformacionPersonalFuncionario />

          <ReferenciasFamiliares />
          
          <Button size="lg" variant="primary" type="submit">{/*Enviar formulario*/}
            Enviar  
          </Button>                   

        </Form>
      </FormContext>

    </Container>
  );
}

export default Main;