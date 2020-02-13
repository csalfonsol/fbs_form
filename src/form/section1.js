// Librerias
import React from 'react';
import { useFormContext } from 'react-hook-form' 

// Layout
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Elementos
import Label from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';



function InformacionPersonalFuncionario() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;
  
  // console.log(watch("nombres")); // you can watch individual input by pass the name of the input

  return (
      
      <div>
        <h3 className="mb-3 mt-5">1. Información personal del funcionario</h3>      
          
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
              <Label>Departamento</Label>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="departamento" type="text" ref={register} />
            </Col>
            <Col md="0" >
              <Label>Ciudad</Label>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="ciudad" type="text" ref={register} />
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
              <Form.Control size="sm" name="cargo" as="select" ref={register}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Col>
          </Row>
          
          <Alert variant={'info'}>
            Datagrid de personas a cargo
          </Alert>  

          <Row className="mb-3">{/*Conyugue y su documento*/}
            <Col md="0" >
              <Label>Nombre Cónyugue</Label>
            </Col>
            <Col md="7">
              <Form.Control size="sm" name="conyugue" type="text" ref={register} />
            </Col>
            <Col md="0" className="ml-4">
              <Label>No. Documento</Label>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="documento_conyugue" type="number" ref={register} />
            </Col>
          </Row>      

          <Row className="mb-3">{/*Movil y trabajo del conyugue*/}
            <Col md="0" >
              <Label>Teléfono Móvil</Label>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="movil_conyugue" type="number" ref={register} />
            </Col>
            <Col md="0" className="ml-5">
              <Label>Empresa donde trabaja</Label>
            </Col>
            <Col md="5">
              <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
            </Col>
          </Row>    

          <Row className="mb-3">{/*Telefono oficina e email del conyugue*/}
            <Col md="0" >
              <Label>Teléfono Oficina</Label>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="movil_conyugue" type="number" ref={register} />
            </Col>
            <Col md="0" className="ml-5">
              <Label>E-mail personal</Label>
            </Col>
            <Col md="5">
              <Form.Control size="sm" name="empresa_conyugue" type="email" ref={register} />
            </Col>
          </Row>     
      </div>                      
    
  );
}

export default InformacionPersonalFuncionario;