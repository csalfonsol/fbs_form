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



function InformacionLaboralFuncionario() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;    

  return (
      
      <div>
        <h3 className="mb-3 mt-5">3. Información laboral del funcionario</h3>      
          
        <Row className="mb-3">{/*Entidad y ciudad oficina*/}
          <Col md="0">
            <Label>Entidad</Label>
          </Col>
          <Col md="6">
            <Form.Control size="sm" name="entidad" as="select" ref={register}>
              <option>Fondo de Bienestar Social de la Contraloría General de la República</option>
              <option>Contraloría General de la República</option>
            </Form.Control>
          </Col>
          <Col md="0" className="ml-5">
            <Label>Ciudad Oficina</Label>
          </Col>
          <Col md="4">
            <Form.Control size="sm" name="ciudad_oficina" as="select" ref={register}>
              <option>Bogotá</option>
              <option>Medellín</option>
              <option>Yopal</option>
              <option>Villavicencio</option>
              <option>...</option>
            </Form.Control>
          </Col>      
        </Row>

        <Row className="mb-3">{/*Gerencia y ubicacion FBS*/}
          <Col md="0">
            <Label>Gerencia Departamental Colegiada</Label>
          </Col>
          <Col md="3">
            <Form.Control size="sm" name="gerencia" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-5">
            <Label><strong>Para Funcionarios FBS señalar Ubicación</strong> <br></br>(Oficina Principal, Colegio ó Centro Médico)</Label>
          </Col>
          <Col md="3">
            <Form.Control size="sm" name="ubicacion" as="select" ref={register}>
              <option>Oficina Principal</option>
              <option>Colegio para Hijos de Empleados de la CGR</option>
              <option>Centro Médico CGR</option>    
            </Form.Control>
          </Col>      
        </Row>

        <Row className="mb-3">{/*Direccion, piso, telefono, extension */}
          <Col md="0">
            <Label>Direccion</Label>
          </Col>
          <Col md="4" className="mr-5">
            <Form.Control size="sm" name="direccion_oficina" type="text" ref={register} />
          </Col>
          <Col md="0" className="ml-4">
            <Label>Piso</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="piso" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-4">
            <Label>Teléfono</Label>
          </Col>
          <Col md="2"> 
            <Form.Control size="sm" name="telefono_oficina" type="number" ref={register} />
          </Col>
          <Col md="0" className="ml-4">
            <Label>Extensión</Label>
          </Col>
          <Col md="1">
            <Form.Control size="sm" name="extension" type="number" ref={register} />
          </Col>
        </Row>

        <Row className="mb-3">{/*Nombramiento, Cargo y grado*/}
          <Col md="0">
            <Label>Nombramiento</Label>
          </Col>
          <Col md="4">
            <Form.Control size="sm" name="nombramiento" as="select" ref={register}>
              <option>Carrera Administrativa</option>
              <option>Libre Nombramiento</option>
              <option>Provisional</option>
              <option>Otro</option>
            </Form.Control>
          </Col>
          <Col md="0" className="ml-5">
            <Label>Cargo y Grado</Label>
          </Col>
          <Col md="5">
            <Form.Control size="sm" name="cargo" as="select" ref={register}>
              <option>Asesor de Despacho - G  02</option>
              <option>Director - G  03</option>
              <option>...</option>
              <option>Profesional Especializado M/T Cod.2028. G-13</option>
              <option>...</option>
            </Form.Control>
          </Col>        
        </Row>  

        <Row className="mb-3">{/*Estado del cargo y Fecha ingreso*/}
          <Col md="0">
            <Label>Estado del cargo</Label>
          </Col>
          <Col md="4" className="mr-4">
            <Form.Control size="sm" name="estado_cargo" as="select" ref={register}>
              <option>Ocupado / Activo</option>
              <option>Posesión en Propiedad</option>
              <option>Comisión</option>
              <option>Período de prueba</option>
              <option>Provisional</option>
              <option>Encargado</option>
              <option>Suspensión definida</option>
            </Form.Control>
          </Col>
          <Col md="0">
            <Label>Fecha de ingreso</Label>
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
        </Row>

        <Row className="mb-3">{/*E-mail institucional y Nota*/}
          <Col md="0">
            <Label>E-mail Institucional</Label>
          </Col>
          <Col md="4">
            <Form.Control size="sm" name="email" type="email" ref={register} />
          </Col>
          <Col>
            <Label className="nota_certificado">Nota: Se debe anexar certificado tiempo de servicio historico cuando la vinculación no ha sido permanente (Literal f numeral 8 Artículo 14 Manual de Crédito Acuerdo 01 de 2014)</Label>
          </Col>                
        </Row>        
  
      </div>                      
    
  );
}

export default InformacionLaboralFuncionario;