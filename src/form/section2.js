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



function ReferenciasFamiliares() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;    

  return (
      
      <div>
        <h3 className="mb-3 mt-5">2. Referencias familiares</h3>      
          
          <Alert variant={'info'}>
            Datagrid de referencias familiares

            <Row className="mb-3 mt-4 text-center">{/*Nombres, apellidos, Ciudad y Telefono */}
              <Col>
                <Label>Nombres y Apellidos</Label>
              </Col>
              <Col>
                <Label>Ciudad de residencia</Label>
              </Col>
              <Col>
                <Label>No. Teléfono fijo / móvil</Label>
              </Col>
            </Row>

            <Row className="mb-3 text-center">{/*Nombres, apellidos, Ciudad y Telefono */}
              <Col>
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
              <Col>
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
              <Col>
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
            </Row>
          </Alert>  

          
  
      </div>                      
    
  );
}

export default ReferenciasFamiliares;