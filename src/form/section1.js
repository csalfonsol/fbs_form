// Librerias
import React, { useState }  from 'react';
import ReactTable from 'react-table-6';
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
import '../styles/app.css';




function InformacionPersonalFuncionario() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;


  // const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

  // Datos de las personas a cargo
  const [data, setData] = useState([
    [0,"Aurelia Vega", "Madrid",22],
    [1,"Guerra Cortez", "San Francisco",30],
    [2,"Guadalupe House", "Frankfurt am Main",45],
    [3,"Elisa Gallagher", "London",8]
  ]);
  

  const handleClick = e => { 
    
    console.log(data);

  }; 

  const agregar = e => { 
        
    let result = [...data];
    result.push([data.length,"", "",])
    setData(result);

  }; 

  

  // Celda para ingresar datos
  function renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
            
         // La variable de estado se actualiza cada vez que se suelta el foco de la celda actual
         onBlur = {e => {
          const newData = [...data];                              
          newData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;          
          setData( newData );
        }}
                
        dangerouslySetInnerHTML = {{
          __html: data[cellInfo.index][cellInfo.column.id]
        }} 
      />
    );
  }

  // Celda para eliminar la fila
  function renderDelete(cellInfo) {
    return (
      <Button 
        onClick = {e => {

          let result = [...data];
          result.splice(cellInfo.index , 1);          
          setData(result);
          
        }}

        size="sm" 
        variant="danger">
          Eliminar
      </Button> 
    );
  }

  return (
      
      <div>

          <Button onClick={handleClick} size="sm" variant="primary">{/*Enviar formulario*/}
            ver data  
          </Button>                 

          <Button onClick={agregar} size="sm" variant="primary">{/*Enviar formulario*/}
            Agregar
          </Button> 

        <ReactTable
          
          data = {data}

          columns={[
            {
              id: 1,
              Header: "Nombres y apellidos de las personas a cargo",
              accessor: "nombre",
              Cell: renderEditable
            },
            {
              id: 2,
              Header: "Parentesco",
              accessor: "parentesco",
              Cell: renderEditable
            },
            {
              id: 3,
              Header: "Edad",
              accessor: "edad",              
              Cell: renderEditable
            },
            {
              id: 4,
              Header: "Eliminar",
              accessor: "delete",              
              Cell: renderDelete
            }
          ]}
          defaultPageSize={data.length}
          pageSize={data.length}
          showPagination = {false}
          className="-striped -highlight"
        />


        
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
            <Label><strong>{data.length}</strong></Label>
            </Col>
          </Row>
          
          <Alert variant={'info'}> {/*Datagrid personas a cargo*/}
            Datagrid de personas a cargo

            <Row className="mb-3 mt-4 text-center">
              <Col md="6" > 
                <Label>Nombres y Apellidos de la(s) persona(s) a cargo</Label>
              </Col>
              <Col md="4" >
                <Label>Parentesco</Label>
              </Col>
              <Col md="2" >
                <Label>Edad</Label>
              </Col>
            </Row>

            <Row className="mb-3 text-center">
              <Col md="6" >
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
              <Col md="4" >
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
              <Col md="2" >
                <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
              </Col>
            </Row>
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