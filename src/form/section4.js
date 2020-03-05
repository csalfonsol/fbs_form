// Librerias
import React, { useEffect, useState }  from 'react';
import { useFormContext } from 'react-hook-form' 

// Layout
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Elementos
import Label from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

const InformacionSolicitudDelCredito = props => {

  // Funcion utilizada para conectar con el contexto principal del formulario
  const register = useFormContext().register;    


  const [mes, setMes] = useState();

  // Se llaman las funciones (Callback) del componente padre (Main)
  const cambiarCategoria = e => { props.cambiarCategoria(e.target.value); }
  const cambiarSubcategoria = e => { props.cambiarSubcategoria(e.target.value); }
  const cambiarVez = e => { props.cambiarVez(e.target.value); }; 
  const cambiarCardinalidadVivienta = e => { props.cambiarCardinalidadVivienta(e.target.value); }
  const cambiarPrimas = e => { props.cambiarPrimas(e.target.value); };


  // Se ejecuta cada vez que se renderiza este componente
  useEffect(() => {   
    // Se carga la lista de departamentos y municipios
    function generarMeses() {
      // Generar listado de meses (1-48)    
      let result = [];    
      for (let mes = 1; mes < 49; mes++) {
        result.push(
          <option value={mes} key={mes}>{mes}</option>
        )     
      }
      setMes(result)                                        
    }    
    generarMeses();            
  }, [])

  
  return (
      
      <div>
        <h3 className="mb-3 mt-5">4. Información solicitud del crédito</h3>      
          
        <Col md="0">          
          <Label className="mb-2">Línea de crédito</Label> 
        </Col>
        <Row className="mb-3 ml-1 text-center">{/*Linea de crédito*/}                              
          <Col md="3"> {/* Vivienda */} 
            <Alert variant={'secondary'}>
              <Label className="mb-2">
                <input className="mr-1" type="radio" value = 'VI'
                  checked = {props.categoria === 'VI'}  
                  onChange = {cambiarCategoria}/>
                <strong>Vivienda</strong>
              </Label>
              <Label className="mb-2 text-left">No. Vez</Label>    
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {props.vez === '1' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  1 Vez
                </Label> 
                <Label className="mr-4">
                  <input className="" type="radio" value="2" 
                    checked = {props.vez === '2' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  2 Vez
                </Label>
                <Label>
                  <input className="" type="radio" value="3" 
                    checked = {props.vez === '3' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  3 Vez
                </Label>
              </Row> 
              <Label className="mb-2 mt-4 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="CM" 
                    checked = {props.subcategoria === 'CM' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                    Compra
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="LI" 
                    checked = {props.subcategoria === 'LI' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                    Liberación
                </Label>
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2"type="radio" value="CC" 
                    checked = {props.subcategoria === 'CC' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                    Construcción
                </Label>       
                </Row> 
                <Row className="mb-2 mt-4 text-center">
                  <Label className="mr-4">
                    <input className="ml-2" type="radio" value="individual" 
                      checked = {props.cardinalidadVivienta === 'individual'}  
                      onChange = {cambiarCardinalidadVivienta}/>
                      Individual
                  </Label> 
                  <Label className="mr-4">
                    <input className="mb-2" type="radio" value="conjunta" 
                      checked = {props.cardinalidadVivienta === 'conjunta'}  
                      onChange = {cambiarCardinalidadVivienta}/>
                      Conjunta
                  </Label>
                </Row>        
            </Alert>
          </Col>

          <Col md="3"> {/* Vehículo */} 
            <Alert variant={'secondary'}> 
              <Label>
                <input className="mr-2" type="radio" value = 'VH'
                  checked = {props.categoria === 'VH'}  
                  onChange = {cambiarCategoria}/>
                  <strong>Vehiculo</strong>
              </Label>
              <Label className="mb-2 text-left">No. Vez</Label>    
              <Row>
                <Label className="mr-5 ml-5">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {props.vez === '1' && props.categoria === 'VH'}  
                    onChange = {cambiarVez}/>
                    1 Vez
                </Label> 
                <Label className="ml-5">
                  <input className="" type="radio" value="2" 
                    checked = {props.vez === '2' && props.categoria === 'VH'}  
                    onChange = {cambiarVez}/>
                    2 Vez
                </Label>
              </Row>
              <Label className="mb-2 mt-2 text-justify nota_vehiculo">No habrá segundo crédito para vehículo hasta no satisfacer la demanda de  crédito por primera vez. Artículo 13, parágrafo Manual de crédito Vigente.
              </Label>   
              <Label className="mb-2 mt-4 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="CM" 
                    checked = {props.subcategoria === 'CM' && props.categoria === 'VH'}  
                    onChange = {cambiarSubcategoria}/>
                    Compra
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2 mb-3" type="radio" value="LI" 
                    checked = {props.subcategoria === 'LI' && props.categoria === 'VH'}  
                    onChange = {cambiarSubcategoria}/>
                    Liberación
                </Label>
                </Row>               
            </Alert>                                       

          </Col>              

          <Col md="3">  {/* Bienestar integral */}           
            <Alert variant={'secondary'}> 
              <Label>
                <input className="mr-1" type="radio" value = 'BI'
                  checked = {props.categoria === 'BI'}  
                  onChange = {cambiarCategoria}/>
                  <strong>Bienestar integral</strong>
              </Label>
              <Label className="mb-2 mt-2 text-left">Modalidad</Label>                  
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="ED" 
                    checked = {props.subcategoria === 'ED' && props.categoria === 'BI'}  
                    onChange = {cambiarSubcategoria}/>
                    Educación
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="RE" 
                    checked = {props.subcategoria === 'RE' && props.categoria === 'BI'}  
                    onChange = {cambiarSubcategoria}/>
                    Recreación
                </Label>
                </Row>
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="SA" 
                    checked = {props.subcategoria === 'SA' && props.categoria === 'BI'}  
                    onChange = {cambiarSubcategoria}/>
                    Salud
                </Label> 
                </Row> 
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="ML" 
                    checked = {props.subcategoria === 'ML' && props.categoria === 'BI'}  
                    onChange = {cambiarSubcategoria}/>
                    Mejoras locativas
                </Label>
                </Row>
                <Row> 
                <Label className="text-left">
                  <input className="ml-2" type="radio" value="HG" 
                    checked = {props.subcategoria === 'HG' && props.categoria === 'BI'}  
                    onChange = {cambiarSubcategoria}/>
                    Hogar
                </Label>
                </Row>
            </Alert>
            <Label className="mb-2">
                <strong>Monto solicitado</strong>
            </Label>            
            <Label className="text-left nota_certificado mb-2" >
              Digite un monto entre <strong>$1</strong> y <strong>$ 9,304,711.80</strong></Label>
            <Label className="text-left">
              <input className="mr-1 mb-3" type="checkbox" value="calamidad"/>
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
                <input className="mr-1" type="radio" value = 'CA'
                  checked = {props.categoria === 'CA'}  
                  onChange = {cambiarCategoria}/>
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
                <Form.Control size="sm" name="meses" as="select" ref={register}>
                  {mes}
                </Form.Control>
              </Col>
            </Row>
            <Label className="mb-2 mt-2 text-left">Descuento por primas</Label>    
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="1" 
                    checked = {props.primas === '1'}  
                    onChange = {cambiarPrimas}/>
                    1 prima &nbsp;
                </Label> 
                <Label className="mr-4">
                  <input className="" type="radio" value="2" 
                    checked = {props.primas === '2'}  
                    onChange = {cambiarPrimas}/>
                    2 primas
                </Label>           
              </Row>     
              <Row>
                <Label className="mr-4">
                  <input className="ml-2" type="radio" value="3" 
                    checked = {props.primas === '3'}  
                    onChange = {cambiarPrimas}/>
                    3 primas
                </Label>
                <Label>
                  <input className="" type="radio" value="4" 
                    checked = {props.primas === '4'}  
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