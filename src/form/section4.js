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
              <div className="custom-control custom-radio">            
                <input className="custom-control-input pointer" type="radio" value='VI' id="VI"
                  checked = {props.categoria === 'VI'}  
                  onChange = {cambiarCategoria}/>
                <label className="mb-2 custom-control-label pointer" for="VI"><strong>Vivienda</strong></label>
              </div>
              <p className="mb-2 text-left">No. Vez</p>    
              <Row>
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='1' id="VI_1"
                    checked = {props.vez === '1' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_1">1 Vez</label>
                </div>
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='2' id="VI_2"
                    checked = {props.vez === '2' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_2">2 Vez</label>
                </div>
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='3' id="VI_3"
                    checked = {props.vez === '3' && props.categoria === 'VI'}  
                    onChange = {cambiarVez}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_3">3 Vez</label>
                </div>             
              </Row> 
              <p className="mb-2 mt-4 text-left">Modalidad</p>                  
              <Row> 
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='CM' id="VI_CM"
                    checked = {props.subcategoria === 'CM' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_CM">Compra</label>
                </div>                  
              </Row> 
              <Row> 
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='LI' id="VI_LI"
                    checked = {props.subcategoria === 'LI' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_LI">Liberación</label>
                </div>               
              </Row> 
              <Row>
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='CC' id="VI_CC"
                    checked = {props.subcategoria === 'CC' && props.categoria === 'VI'}  
                    onChange = {cambiarSubcategoria}/>
                  <label className="mr-4 custom-control-label pointer" for="VI_CC">Construcción</label>
                </div>                       
              </Row> 
              <Row className="mb-2 mt-4 text-center">
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='INDIVIDUAL' id="IND"
                    checked = {props.cardinalidadVivienta === 'INDIVIDUAL' && props.categoria === 'VI'}  
                    onChange = {cambiarCardinalidadVivienta}/>
                  <label className="mr-4 custom-control-label pointer" for="IND">Individual</label>
                </div>      
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='CONJUNTA' id="CON"
                    checked = {props.cardinalidadVivienta === 'CONJUNTA' && props.categoria === 'VI'}  
                    onChange = {cambiarCardinalidadVivienta}/>
                  <label className="mr-4 custom-control-label pointer" for="CON">Individual</label>
                </div>                              
              </Row>        
            </Alert>
          </Col>

          <Col md="3"> {/* Vehículo */} 
            <Alert variant={'secondary'}> 
              <div className="custom-control custom-radio">            
                <input className="custom-control-input pointer" type="radio" value='VH' id="VH"
                  checked = {props.categoria === 'VH'}  
                  onChange = {cambiarCategoria}/>
                <label className="mb-2 custom-control-label pointer" for="VH"><strong>Vehículo</strong></label>
              </div>              
              <p className="mb-2 text-left">No. Vez</p>    
              <Row>
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='1' id="VH_1"
                    checked = {props.vez === '1' && props.categoria === 'VH'}  
                    onChange = {cambiarVez}/>
                  <label className="mr-4 custom-control-label pointer" for="VH_1">1 Vez</label>
                </div>     
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='2' id="VH_2"
                    checked = {props.vez === '2' && props.categoria === 'VH'}  
                    onChange = {cambiarVez}/>
                  <label className="mr-4 custom-control-label pointer" for="VH_2">2 Vez</label>
                </div>   
              </Row>
              <p className="mt-2 text-justify nota_vehiculo">No habrá segundo crédito para vehículo hasta no satisfacer la demanda de  crédito por primera vez. Artículo 13, parágrafo Manual de crédito Vigente.
              </p>   
              <p className="mb-2 mt-4 text-left">Modalidad</p>
              <Row> 
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='CM' id="VH_CM"
                    checked = {props.subcategoria === 'CM' && props.categoria === 'VH'}  
                    onChange = {cambiarSubcategoria}/>
                  <label className="mr-4 custom-control-label pointer" for="VH_CM">Compra</label>
                </div>                  
              </Row> 
              <Row> 
                <div className="ml-2 custom-control custom-radio">            
                  <input className="custom-control-input pointer" type="radio" value='LI' id="VH_LI"
                    checked = {props.subcategoria === 'LI' && props.categoria === 'VH'}  
                    onChange = {cambiarSubcategoria}/>
                  <label className="mr-4 custom-control-label pointer" for="VH_LI">Liberación</label>
                </div>               
              </Row>                                  
            </Alert>                                       
          </Col>              

          <Col md="3">  {/* Bienestar integral */}           
            <Alert variant={'secondary'}> 
              <div className="custom-control custom-radio">            
                <input className="custom-control-input pointer" type="radio" value='BI' id="BI"
                  checked = {props.categoria === 'BI'}  
                  onChange = {cambiarCategoria}/>
                <label className="mb-2 custom-control-label pointer" for="BI"><strong>Bienestar integral</strong></label>
              </div>                 
              <p className="mb-2 mt-2 text-left">Modalidad</p>                  
                <Row> 
                  <div className="ml-2 custom-control custom-radio">            
                    <input className="custom-control-input pointer" type="radio" value='ED' id="BI_ED"
                      checked = {props.subcategoria === 'ED' && props.categoria === 'BI'}  
                      onChange = {cambiarSubcategoria}/>
                    <label className="mr-4 custom-control-label pointer" for="BI_ED">Educación</label>
                  </div>                
                </Row> 
                <Row> 
                  <div className="ml-2 custom-control custom-radio">            
                    <input className="custom-control-input pointer" type="radio" value='RE' id="BI_RE"
                      checked = {props.subcategoria === 'RE' && props.categoria === 'BI'}  
                      onChange = {cambiarSubcategoria}/>
                    <label className="mr-4 custom-control-label pointer" for="BI_RE">Recreación</label>
                  </div>              
                </Row>
                <Row> 
                  <div className="ml-2 custom-control custom-radio">            
                    <input className="custom-control-input pointer" type="radio" value='SA' id="BI_SA"
                      checked = {props.subcategoria === 'SA' && props.categoria === 'BI'}  
                      onChange = {cambiarSubcategoria}/>
                    <label className="mr-4 custom-control-label pointer" for="BI_SA">Salud</label>
                  </div>       
                </Row> 
                <Row> 
                  <div className="ml-2 custom-control custom-radio">            
                    <input className="custom-control-input pointer" type="radio" value='ML' id="BI_ML"
                      checked = {props.subcategoria === 'ML' && props.categoria === 'BI'}  
                      onChange = {cambiarSubcategoria}/>
                    <label className="mr-4 custom-control-label pointer" for="BI_ML">Mejoras locativas</label>
                  </div>       
                </Row>
                <Row> 
                  <div className="ml-2 custom-control custom-radio">            
                    <input className="custom-control-input pointer" type="radio" value='HG' id="BI_HG"
                      checked = {props.subcategoria === 'HG' && props.categoria === 'BI'}  
                      onChange = {cambiarSubcategoria}/>
                    <label className="mr-4 custom-control-label pointer" for="BI_HG">Hogar</label>
                  </div>
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
              <div className="custom-control custom-radio">            
                <input className="custom-control-input pointer" type="radio" value='CA' id="CA"
                  checked = {props.categoria === 'CA'}  
                  onChange = {cambiarCategoria}/>
                <label className="mb-2 custom-control-label pointer" for="CA"><strong>Calamidad</strong></label>
              </div>                   
              <p className="mb-2 mt-2 text-justify nota_vehiculo">
                Nota: El plazo máximo para calamidad es de 36 meses.
              </p> 
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
                  <input className="ml-2 mb-3" type="radio" value="1" 
                    checked = {props.primas === '1'}  
                    onChange = {cambiarPrimas}/>
                    1 prima &nbsp;
                </Label> 
                <Label className="ml-4">
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
                  <input className="ml-4" type="radio" value="4" 
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