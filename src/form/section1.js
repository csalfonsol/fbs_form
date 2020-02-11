import React from 'react';
import { useForm } from 'react-hook-form'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Label from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/app.css';

function InformacionPersonalFuncionario() {

  const { register, handleSubmit, watch, errors } = useForm();
  
  // your form submit function which will invoke after successful validation
  const onSubmit = data => {
    console.log(data);
  }; 
  

  // console.log(watch("nombres")); // you can watch individual input by pass the name of the input

  return (

    <Container fluid>
      <h2 className="text-center mb-5">SOLICITUD DE CRÉDITO</h2>


      <h3 className="mb-3 mt-5">1. Información personal del funcionario</h3>

      <Form onSubmit={handleSubmit(onSubmit)} >
        
        <Row className="mb-3">{/*Nombres y apellidos */}
          <Col md="0" >
            <Label>Nombres y Apellidos completos</Label>
          </Col>
          <Col>
            <Form.Control size="sm" name="nombres" type="text" ref={register} />
          </Col>
        </Row>

        <Row className="mb-3">{/*Documento, sexo y movil */}
          <Col md="0">
            <Label>Tipo Documento</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="tipo_documento" as="select" ref={register}>
              <option>C.C</option>
              <option>C.E</option>
            </Form.Control>
          </Col>
          <Col md="0" className="ml-5">
            <Label>No. Documento</Label>
          </Col>
          <Col md="2">
            <Form.Control size="sm" name="documento" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-5">
            <Label>Sexo</Label>
          </Col>
          <Col md="2"> 
            <Form.Control size="sm" name="sexo" as="select" ref={register}>
              <option>Mujer</option>
              <option>Hombre</option>
              <option>Otro</option>
            </Form.Control>
          </Col>
          <Col md="0" className="ml-5">
            <Label>Teléfono Móvil</Label>
          </Col>
          <Col md="2">
            <Form.Control size="sm" name="movil" type="number" ref={register} />
          </Col>
        </Row> 

        <Row className="mb-3">{/*Direccion y Teléfono fijo */}
          <Col md="0" >
            <Label>Dirección Residencia</Label>
          </Col>
          <Col md="7">
            <Form.Control size="sm" name="direccion" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-4">
            <Label>Teléfono Fijo</Label>
          </Col>
          <Col md="2">
            <Form.Control size="sm" name="fijo" type="number" ref={register} />
          </Col>
        </Row>

        <Row className="mb-3">{/*Ciudad, departamento e email*/}
          <Col md="0" >
            <Label>Ciudad</Label>
          </Col>
          <Col md="3">
            <Form.Control size="sm" name="ciudad" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-5">
            <Label>Departamento</Label>
          </Col>
          <Col md="2">
            <Form.Control size="sm" name="departamento" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-5">
            <Label>E-mail Personal</Label>
          </Col>
          <Col md="3">
            <Form.Control size="sm" name="email" type="email" ref={register} />
          </Col>
        </Row>

        <Row className="mb-3">{/*Fecha nacimiento, Estado civil y Personas a cargo*/}
          <Col md="0" className="mr-3">
            <Label>Fecha Nacimiento</Label>
          </Col>
          <Col md="0" className="ml-5">
            <Label>Día</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="dia" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-2">
            <Label>Mes</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="mes" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-2">
            <Label>Año</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="ano" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-5">
            <Label>Estado Civil</Label>
          </Col>
          <Col md="2">
            <Form.Control size="sm" name="ciudad" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-4">
            <Label>Personas a cargo</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="ano" as="select" ref={register}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Col>
        </Row>

    

        <Button variant="primary" type="submit">
          Enviar  
        </Button>                   

      </Form>


    </Container>
  );
}

export default InformacionPersonalFuncionario;


/*
<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" ref={register}/>
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" ref={register}/>
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
*/
