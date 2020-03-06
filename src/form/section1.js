// Librerias
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form' 
import es from 'date-fns/locale/es';
import axios from 'axios';

// Layout
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Elementos
import Button from 'react-bootstrap/Button';
import ReactTable from 'react-table-6';
import DatePicker from "react-datepicker";

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table-6/react-table.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/app.css';



// URL del servidor para solicitar los departamentos
const URL_departamentos = 'http://3.80.200.194/ords/snw_fonviv/lista/departamento'

// URL del servidor para solicitar municipios a partir de un departamento
var URL_municipios = 'http://3.80.200.194/ords/snw_fonviv/lista/municipio?id_departamento='

// URL del servidor para solicitar municipios a partir de un departamento
var URL_nombre_completo = 'http://3.80.200.194/ords/snw_fonviv/solicitud/cliente?identificacion='



const InformacionPersonalFuncionario = props => {
  
  // Funciones utilizadas para conectar con el contexto principal del formulario
  const register = useFormContext().register;  
  const watch = useFormContext().watch;  

  const [nombreCompleto, setNombreCompleto] = useState("Se autocompleta con el No. de documento...");
  const [departamentos, setDepartamentos] = useState();
  const [municipios, setMunicipios] = useState();
  
  // Se llama la función (Callback) del componente padre (Main)
  function cambiarFechaNacimiento(fecha) { props.cambiarFechaNacimiento(fecha); }
  function cambiarPersonasaCargo(data) { props.cambiarPersonasaCargo(data); }  


  // Se ejecuta cada vez que se renderiza este componente
  useEffect(() => {   

   // Se carga la lista de departamentos y municipios
   async function obtenerDepartamentos() {
      try {
        let response = await axios.get(URL_departamentos)
        let data = response.data.items
        let result = []
        
        for (let index in data) {                   
          result.push(<option value={data[index].codigo} key={data[index].codigo}>{data[index].nombre}</option>)
        }
        setDepartamentos(result)
        
        // Se obtiene el municipio por defecto a partir del departamento por defecto
        recalcularMunicipios()

      } catch (error) {
        console.log('Fallo obteniendo los departamentos / municipios' + error)
      }      
    }    
    obtenerDepartamentos();            
  }, [])

  // Funcion para consultar en base de datos los nombres y apellidos a partir del numero de documento
  async function obtenerNombreCompleto() {     
    
    try {
      let URL = URL_nombre_completo
      URL += watch('documento')      
      let response = await axios.get(URL)
      let result = await response.data

      setNombreCompleto(result);
      
    } catch (error) {
      console.log('Fallo obteniendo los nombres y apellidos' + error)
    }   
  }

  // Recalcular listado de municipios con base al departamento seleccionado
  async function recalcularMunicipios() {     
    
    try {
      let URL = URL_municipios
      URL += watch('departamento')      
      let response = await axios.get(URL)
      let data = await response.data.items
      let result = []
      
      for (let index in data) {                   
        result.push(
          <option value={data[index].codigo} key={data[index].codigo}>{data[index].nombre}</option>
        )
      }
      setMunicipios(result) 
      
    } catch (error) {
      console.log('Fallo obteniendo los municipios' + error)
    }   
  }


  // Agregar una persona a cargo en el datagrid de personas a cargo
  function agregar() {     
    
    // Máximo pueden haber 4 personas a cargo
    if (props.personasaCargo.length < 4){ 
      let result = [...props.personasaCargo];
      result.push([,"", "",])
      cambiarPersonasaCargo(result);
    }
  }

  // Celda para ingresar datos
  function renderEditable(cellInfo) {
    return (
      <div        
        className = "cell"
        contentEditable                   

        // La variable de estado se actualiza cada vez que se suelta el foco de la celda actual
        onBlur = {e => {
          // Se valida si la edad es numerica o no
          if (cellInfo.column.id === 3){
            if (!isNaN(e.target.innerHTML)){
              const newData = [...props.personasaCargo];
              newData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;                          
              cambiarPersonasaCargo(newData);
            }
          }          
          else {
              const newData = [...props.personasaCargo];
              newData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;                          
              cambiarPersonasaCargo(newData);
          }
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
          // Mínimo debe haber una persona a cargo
          if (props.personasaCargo.length > 1){ 
            let result = [...props.personasaCargo];
            result.splice(cellInfo.index , 1);          
            cambiarPersonasaCargo(result);       
          }   
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
              <span>Nombres y Apellidos</span>
            </Col>
            <Col>
              <Form.Control disabled size="sm" name="nombres" type="text" value={nombreCompleto}/>
            </Col>  
          </Row>

          <Row className="mb-3">{/*Documento, sexo y movil */}
            <Col md="0">
              <span>Tipo Documento</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="tipo_documento" as="select" ref={register}>                
                <option value="CC">C.C</option>
                <option value="CE">C.E</option>
                <option value="NIT">NIT</option>
                <option value="TI">T.I</option>
                <option value="RC">REGISTRO CIVIL</option>
              </Form.Control>
            </Col>
            <Col md="0" className="ml-3">
              <span>No. Documento</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="documento" type="number" onBlur = {obtenerNombreCompleto} ref={register} />
            </Col>
            <Col md="0" className="ml-3 mr-3">
              <span>Sexo</span>
            </Col>
            <Col md="0"> 
              <Form.Control size="sm" name="sexo" as="select" ref={register}>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </Form.Control>
            </Col>
            <Col md="0" className="ml-5">
              <span>Teléfono Móvil</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="movil" type="number" ref={register} />
            </Col>
          </Row> 

          <Row className="mb-3">{/*Direccion y Teléfono fijo */}
            <Col md="0" >
              <span>Dirección Residencia</span>
            </Col>
            <Col md="7">
              <Form.Control size="sm" name="direccion" type="text" ref={register} />
            </Col>
            <Col md="0" className="ml-4">
              <span>Teléfono Fijo</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="fijo" type="number" ref={register} />
            </Col>
          </Row>
          
          <Row className="mb-3">{/*Municipio, departamento e email*/}
            <Col md="0" >
              <span>Departamento</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="departamento" as="select" onChange={recalcularMunicipios} ref={register}>
                {departamentos}
              </Form.Control>
            </Col>
            <Col md="0" >
              <span>Municipio</span>
            </Col>
            <Col md="3">
             <Form.Control size="sm" name="municipio" as="select" ref={register}>
                {municipios}
              </Form.Control>
            </Col>            
            <Col md="0" className="ml-5">
              <span>E-mail Personal</span>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="email" type="email" ref={register} />
            </Col>
          </Row>

          <Row className="mb-4 pb-2">{/*Fecha nacimiento, Estado civil y Personas a cargo*/}
            <Col md="0" className="mr-3">
              <span>Fecha Nacimiento</span>
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
              <span>Estado Civil</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="civil" type="text" ref={register} />
            </Col>           
          </Row>
          
          <Row className="mt-4">
            <span className="pt-1">Personas a cargo: &nbsp; <strong>{props.personasaCargo.length}</strong></span>  &nbsp;&nbsp;&nbsp;
            <Button className="mb-2" onClick={agregar} size="sm" variant="info">
              Agregar
            </Button> 
          </Row>

          <Col md="0">                    
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
              className = "-striped -highlight blue"
            />           
          </Col>         

          <Row className="mb-3 mt-4">{/*Conyugue y su documento*/}
            <Col md="0" >
              <span>Nombre Cónyugue</span>
            </Col>
            <Col md="7">
              <Form.Control size="sm" name="conyugue" type="text" ref={register} />
            </Col>
            <Col md="0" className="ml-4">
              <span>No. Documento</span>
            </Col>
            <Col md="2">
              <Form.Control size="sm" name="documento_conyugue" type="number" ref={register} />
            </Col>
          </Row>      

          <Row className="mb-3">{/*Movil y trabajo del conyugue*/}
            <Col md="0" >
              <span>Teléfono Móvil</span>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="movil_conyugue" type="number" ref={register} />
            </Col>
            <Col md="0" className="ml-5">
              <span>Empresa donde trabaja</span>
            </Col>
            <Col md="5">
              <Form.Control size="sm" name="empresa_conyugue" type="text" ref={register} />
            </Col>
          </Row>    

          <Row className="mb-3">{/*Telefono oficina e email del conyugue*/}
            <Col md="0" >
              <span>Teléfono Oficina</span>
            </Col>
            <Col md="3">
              <Form.Control size="sm" name="movil_conyugue" type="number" ref={register} />
            </Col>
            <Col md="0" className="ml-5">
              <span>E-mail personal</span>
            </Col>
            <Col md="5">
              <Form.Control size="sm" name="empresa_conyugue" type="email" ref={register} />
            </Col>
          </Row>     
      </div>                      
    
  );
}

export default InformacionPersonalFuncionario;