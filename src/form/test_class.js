// Librerias
import React, { useState } from 'react';

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
import InformacionLaboralFuncionario from './section3';
import InformacionSolicitudDelCredito from './section4';



class Test extends React.Component  {

  // Variable para determinar linea de credito (Vivienda, Vehiculo, Bienestar o calamidad)
  //const [linea, setLinea] = useState('vehicuo');  
  handleClick(e) {
    e.preventDefault();
    // console.log('The link was clicked.');
    alert('hello');
  }

  // console.log(watch("nombres")); // Se puede usar watch para ver el valor del item pasado por parametro
  render() {
    return (    

      <Container fluid>

        <button onClick={this.handleClick}>Hi</button>

        <h2 className="text-center mb-5">SOLICITUD DE CRÉDITO</h2> {/*Encabezado del formulario*/}    

      </Container>
    );
  }
}

export default Test;