// Librerias
import React, { useState, useEffect }  from 'react';
import ReactTable from 'react-table-6';
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
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
import 'react-table-6/react-table.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/app.css';


const InformacionPersonalFuncionario = props => {
  
  
  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;  
  
  // Se llama la función (Callback) del componente padre (Main)
  function cambiarFechaNacimiento(fecha) { props.cambiarFechaNacimiento(fecha); }
  function cambiarPersonasaCargo(data) { props.cambiarPersonasaCargo(data); }


  // Agregar una persona a cargo en el datagrid de personas a cargo
  const agregar = e => {       
    let result = [...props.personasaCargo];
    result.push([,"", "",])
    cambiarPersonasaCargo(result);
  }; 
  

  // Celda para ingresar datos
  function renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
                   
         // La variable de estado se actualiza cada vez que se suelta el foco de la celda actual
         onBlur = {e => {
          const newData = [...props.personasaCargo];
          newData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;          
          cambiarPersonasaCargo( newData );
        }}
                
        dangerouslySetInnerHTML = {{
          __html: props.personasaCargo[cellInfo.index][cellInfo.column.id]
        }} 
      />
    );
  }


  // Celda para eliminar la fila
  function renderDelete(cellInfo) {
    return (
      <Button 
        onClick = {e => {

          let result = [...props.personasaCargo];
          result.splice(cellInfo.index , 1);          
          cambiarPersonasaCargo(result);
          
        }}

        size="sm" 
        variant="danger"
        className="rellenar">    
          Eliminar
      </Button> 
    );
  }

  return (
      
      <div>
                
        <h3 className="mb-4 mt-5">1. Información personal del funcionario</h3>      
          
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

          <Row className="mb-4 pb-2">{/*Fecha nacimiento, Estado civil y Personas a cargo*/}
            <Col md="0" className="mr-3">
              <Label>Fecha Nacimiento</Label>
            </Col>
            

            <DatePicker
              selected={props.fechaNacimiento}
              onChange={date => cambiarFechaNacimiento(date)}
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              locale={es}
              isClearable
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"              
                            
            />
            

            <Col md="0" className="ml-5">
              <Label>Estado Civil</Label>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="ciudad" type="text" ref={register} />
            </Col>           
          </Row>
          
          <Row className="mt-4">
            <Label className="pt-1">Personas a cargo: &nbsp; <strong>{props.personasaCargo.length}</strong></Label>  &nbsp;&nbsp;&nbsp;
            <Button className="mb-2" onClick={agregar} size="sm" variant="info">{/*Agregar una persona a cargo en el datagrid de personas a cargo*/}
              Agregar
            </Button> 
          </Row>

          <Col md="0">          
            {/*
            <Button onClick={handleClick} size="sm" variant="primary">
             ver data  
            </Button>   
            */}

            <ReactTable /* Datagrid de Personas a cargo */
              
              data = {props.personasaCargo}

              columns={[
                {
                  id: 1,
                  Header: "Nombres y apellidos de las personas a cargo",
                  accessor: "nombre",
                  width: 500,
                  headerClassName: "encabezado_columna",
                  Cell: renderEditable
                },
                {
                  id: 2,
                  Header: "Parentesco",
                  accessor: "parentesco",         
                  headerClassName: "encabezado_columna",                           
                  Cell: renderEditable
                },
                {
                  id: 3,
                  Header: "Edad",
                  accessor: "edad",              
                  width: 120,                                    
                  className: "text-center",
                  headerClassName: "encabezado_columna",
                  Cell: renderEditable
                },
                {
                  id: 4,
                  Header: "Eliminar",
                  accessor: "delete",              
                  width: 250,
                  className: "text-center",
                  headerClassName: "encabezado_columna",
                  Cell: renderDelete
                }
              ]}              
              pageSize = {props.personasaCargo.length}
              showPagination = {false}            
              resizable = {false}  
              className = "-striped -highlight"
            />

            
          </Col>         

          <Row className="mb-3 mt-4">{/*Conyugue y su documento*/}
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