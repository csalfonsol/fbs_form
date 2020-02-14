// Librerias
import React, { useState }  from 'react';
import { useFormContext } from 'react-hook-form' 

// Layout
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Elementos
import Label from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { MDBContainer, MDBInput } from "mdbreact";

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';



function InformacionSolicitudDelCredito() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;    

  // Variable para determinar linea de credito (Vivienda, Vehiculo, Bienestar o calamidad)
  const [linea, setLinea] = useState('vehicuo');  

  const handleClick = e => {
   
    e.preventDefault();
    // console.log(data);
    alert(linea);
  }; 

  return (
      
      <div>
        <h3 className="mb-3 mt-5">4. Información solicitud del crédito</h3>      
          
        <Row className="mb-3">{/*Entidad y ciudad oficina*/}
          <Col md="0">
            <Label>Entidad</Label>
            <Form.Control size="sm" name="entidad" as="select" ref={register}>
              <option>Fondo de Bienestar Social de la Contraloría General de la República</option>
              <option>Contraloría General de la República</option>
            </Form.Control>

            
          </Col>
          <Col md="6" className="ml-5">
            <Label>Ciudad Oficina</Label>
            <Form.Control size="sm" name="ciudad_oficina" as="select" ref={register}>
              <option>Bogotá</option>
              <option>Medellín</option>
              <option>Yopal</option>
              <option>Villavicencio</option>
              <option>...</option>
            </Form.Control>


            <button onClick={handleClick}>Hi</button>

            <Label>
              <input type="radio" value="x" checked={linea === 'vehicuo'}  />
              Vehiculo
            </Label>
            <Label>
              <input type="radio" value="y" />
              Bienestar
            </Label>


          </Col>    
        </Row>
    
      </div>                      
    
  );
}

export default InformacionSolicitudDelCredito;