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
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';



function InformacionSolicitudDelCredito() {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;    

  // Variable para determinar linea de credito (Vivienda, Vehiculo, Bienestar o calamidad)
  const [linea, setLinea] = useState('vehiculo');  

  const [vezVivienta, setVezVivienda] = useState('1');  
  const [modalidadVivienta, setModalidadVivienta] = useState('compra');  
  const [cardinalidadVivienta, setCardinalidadVivienta] = useState('individual');

  const [vezVehiculo, setVezVehiculo] = useState('1');  
  const [modalidadVehiculo, setModalidadVehiculo] = useState('compra');  

  const [modalidadBienestar, setModalidadBienestar] = useState('educacion');  

  const [primas, setPrimas] = useState('1');  



  const cambiarLinea = e => { setLinea(e.target.value); }; 
  const cambiarVezVivienda = e => { setVezVivienda(e.target.value); }; 
  const cambiarModalidadVivienta = e => { setModalidadVivienta(e.target.value); }; 
  const cambiarCardinalidadVivienta = e => { setCardinalidadVivienta(e.target.value); }; 
  const cambiarVezVehiculo = e => { setVezVehiculo(e.target.value); }; 
  const cambiarModalidadVehiculo = e => { setModalidadVehiculo(e.target.value); }; 
  const cambiarModalidadBienestar = e => { setModalidadBienestar(e.target.value); }; 
  const cambiarPrimas = e => { setPrimas(e.target.value); }; 

  const handleClick = e => { 
    e.preventDefault();        
  }; 

  return (
      
      <div>
        <h3 className="mb-3 mt-5">4. Información solicitud del crédito</h3>      
          
        <Label className="mb-2">Línea de crédito</Label> 
        <Row className="mb-3 ml-1 text-center">{/*Linea de crédito*/}                              
          <Col md="3"> {/* Vivienda */} 
            <Alert variant={'secondary'}>
              <Label className="mb-2">
                <input className="mr-1" type="radio" value="vivienda" 
                  checked = {linea === 'vivienda'}  
                  onChange = {cambiarLinea}/>
                  <strong>Vivienda</strong>
              </Label>
              <Label className="mb-2 text-left">No. Vez</Label>    
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {vezVivienta === '1'}  
                    onChange = {cambiarVezVivienda}/>
                    1 Vez
                </Label> 
                <Label className="mr-4">
                  <input className="" type="radio" value="2" 
                    checked = {vezVivienta === '2'}  
                    onChange = {cambiarVezVivienda}/>
                    2 Vez
                </Label>
                <Label>
                  <input className="" type="radio" value="3" 
                    checked = {vezVivienta === '3'}  
                    onChange = {cambiarVezVivienda}/>
                    3 Vez
                </Label>
              </Row> 
              <Label className="mb-2 mt-4 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="compra" 
                    checked = {modalidadVivienta === 'compra'}  
                    onChange = {cambiarModalidadVivienta}/>
                    Compra
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="liberacion" 
                    checked = {modalidadVivienta === 'liberacion'}  
                    onChange = {cambiarModalidadVivienta}/>
                    Liberación
                </Label>
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2"type="radio" value="construccion" 
                    checked = {modalidadVivienta === 'construccion'}  
                    onChange = {cambiarModalidadVivienta}/>
                    Construcción
                </Label>       
                </Row> 
                <Row className="mb-2 mt-4 text-center">
                  <Label className="mr-4">
                    <input className="ml-2" type="radio" value="individual" 
                      checked = {cardinalidadVivienta === 'individual'}  
                      onChange = {cambiarCardinalidadVivienta}/>
                      Individual
                  </Label> 
                  <Label className="mr-4">
                    <input className="mb-2" type="radio" value="conjunta" 
                      checked = {cardinalidadVivienta === 'conjunta'}  
                      onChange = {cambiarCardinalidadVivienta}/>
                      Conjunta
                  </Label>
                </Row>        
            </Alert>
          </Col>

          <Col md="3"> {/* Vehículo */} 
            <Alert variant={'secondary'}> 
              <Label>
                <input className="mr-2" type="radio" value="vehiculo" 
                  checked = {linea === 'vehiculo'}  
                  onChange = {cambiarLinea}/>
                  <strong>Vehiculo</strong>
              </Label>
              <Label className="mb-2 text-left">No. Vez</Label>    
              <Row>
                <Label className="mr-5 ml-5">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {vezVehiculo === '1'}  
                    onChange = {cambiarVezVehiculo}/>
                    1 Vez
                </Label> 
                <Label className="ml-5">
                  <input className="" type="radio" value="2" 
                    checked = {vezVehiculo === '2'}  
                    onChange = {cambiarVezVehiculo}/>
                    2 Vez
                </Label>
              </Row>
              <Label className="mb-2 mt-2 text-justify nota_vehiculo">No habrá segundo crédito para vehículo hasta no satisfacer la demanda de  crédito por primera vez. Artículo 13, parágrafo Manual de crédito Vigente.
              </Label>   
              <Label className="mb-2 mt-4 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="compra" 
                    checked = {modalidadVehiculo === 'compra'}  
                    onChange = {cambiarModalidadVehiculo}/>
                    Compra
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2 mb-3" type="radio" value="liberacion" 
                    checked = {modalidadVehiculo === 'liberacion'}  
                    onChange = {cambiarModalidadVehiculo}/>
                    Liberación
                </Label>
                </Row>               
            </Alert>                                       

          </Col>              

          <Col md="3">  {/* Bienestar integral */}           
            <Alert variant={'secondary'}> 
              <Label>
                <input className="mr-1" type="radio" value="bienestar" 
                  checked = {linea === 'bienestar'}  
                  onChange = {cambiarLinea}/>
                  <strong>Bienestar integral</strong>
              </Label>
              <Label className="mb-2 mt-2 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="educacion" 
                    checked = {modalidadBienestar === 'educacion'}  
                    onChange = {cambiarModalidadBienestar}/>
                    Educación
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="recreacion" 
                    checked = {modalidadBienestar === 'recreacion'}  
                    onChange = {cambiarModalidadBienestar}/>
                    Recreación
                </Label>
                </Row>
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="salud" 
                    checked = {modalidadBienestar === 'salud'}  
                    onChange = {cambiarModalidadBienestar}/>
                    Salud
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="locativas" 
                    checked = {modalidadBienestar === 'locativas'}  
                    onChange = {cambiarModalidadBienestar}/>
                    Mejoras locativas
                </Label>
                </Row>
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="hogar" 
                    checked = {modalidadBienestar === 'hogar'}  
                    onChange = {cambiarModalidadBienestar}/>
                    Hogar
                </Label>
                </Row>
            </Alert>
            <Label>
                <strong>Monto solicitado</strong>
            </Label>            
            <Label className="text-left">
              <input className="mr-1 mb-3" type="radio" value="calamidad" 
                checked = {linea === 'calamidad'}  
                onChange = {cambiarLinea}/>
                Cupo máximo permitido
            </Label>
            <Row>
              <Col className="ml-3" md="0">
                <Label className="text-left" >Monto específico</Label>
              </Col>            
              <Col md="7">
                <Form.Control size="sm" name="monto_especifico" type="number" ref={register} />
              </Col>
            </Row>
          </Col>

          <Col md="3"> 
            <Alert variant={'secondary'}>
              <Label>
                <input className="mr-1" type="radio" value="calamidad" 
                  checked = {linea === 'calamidad'}  
                  onChange = {cambiarLinea}/>
                  <strong>Calamidad</strong>
              </Label>
              <Label className="mb-2 mt-2 text-justify nota_vehiculo">
                Nota: El plazo máximo para calamidad es de 36 meses.
              </Label> 
            </Alert>
            <Label>
                <strong>Forma de pago</strong>
            </Label>            
            <Label className="text-left mt-1">              
                Descuento mensual por nómina
            </Label>
            <Row className="mt-2">
              <Col className="ml-2" md="0">
                <Label className="text-left nota_pago" >(Máximo 48 Meses,excepto calamidad)</Label>
              </Col>            
              <Col md="3">
                <Form.Control size="sm" name="ubicacion" as="select" ref={register}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>...</option>
                </Form.Control>
              </Col>
            </Row>
            <Label className="mb-2 mt-2 text-left">Descuento por primas</Label>    
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {primas === '1'}  
                    onChange = {cambiarPrimas}/>
                    1 prima
                </Label> 
                <Label className="mr-4">
                  <input className="" type="radio" value="2" 
                    checked = {primas === '2'}  
                    onChange = {cambiarPrimas}/>
                    2 primas
                </Label>           
              </Row>     
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="3" 
                    checked = {primas === '3'}  
                    onChange = {cambiarPrimas}/>
                    3 primas
                </Label>
                <Label>
                  <input className="" type="radio" value="4" 
                    checked = {primas === '4'}  
                    onChange = {cambiarPrimas}/>
                    4 primas
                </Label>
              </Row>


          </Col>
          <Label className="mb-2 text-justify">Los plazos para vivienda y vehículo son los estipulados en las tablas anexas al Manual de <br></br> Crédito Vigente
          </Label> 
        </Row>
    
      </div>                      
    
  );
}

export default InformacionSolicitudDelCredito;