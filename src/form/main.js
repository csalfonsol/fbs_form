// Librerias
import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form'
import axios from 'axios';

// Layout
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// Elementos
import Button from 'react-bootstrap/Button';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

// Componentes formulario
import InformacionPersonalFuncionario from './section1';
import ReferenciasFamiliares from './section2';
import InformacionLaboralFuncionario from './section3';
import InformacionSolicitudDelCredito from './section4';
import DeclaracionAutorizacionFirma from './section5';




// URL del servidor que recibirá los datos
const URL = 'http://3.80.200.194/ords/snw_fonviv/solicitud/crear'

function Main() {

  // Metodos principales de React-hook-form para capturar los datos, manejar validaciones y crear el contexto del formulario
  const methods = useForm();
  const { register, handleSubmit, watch } = methods;
  
  // Variables de estado (hooks) y sus Setters
  const [fechaNacimiento, setFechaNacimiento] = useState(); 
  const [fechaIngreso, setFechaIngreso] = useState(); 
  const [personasaCargo, setPersonasaCargo] = useState([ // Datagrid de personas a cargo
    [,"", "",]
  ]);
  const [referenciasFamiliares, setReferenciasFamiliares] = useState([ // Datagrid de referencias familiares
    [,"", "",]
  ]);  
  const [categoria, setCategoria] = useState();  
  const [vez, setVez] = useState();  
  const [subcategoria, setSubcategoria] = useState();  
  const [cardinalidadVivienta, setCardinalidadVivienta] = useState();  
  const [primas, setPrimas] = useState();  
  
 
  // Funciones para llamar los Setters de los hooks de las variables de estado
  function cambiarFechaNacimiento(nuevaFecha) { setFechaNacimiento(nuevaFecha); }
  function cambiarFechaIngreso(nuevaFecha) { setFechaIngreso(nuevaFecha); }
  function cambiarPersonasaCargo(nuevasPersonas) { setPersonasaCargo(nuevasPersonas); } // TODO: Buscar la manera de eliminar la primera posicion vacia (Se requiere para que encaje con las columnas del datagrid 
  function cambiarReferenciasFamiliares(nuevasReferencias) { setReferenciasFamiliares(nuevasReferencias); } 
  function cambiarCategoria(nuevaCategoria) { setCategoria(nuevaCategoria); }
  function cambiarVez(nuevaVez) { setVez(nuevaVez); }
  function cambiarSubcategoria(nuevaSubcategoria) { setSubcategoria(nuevaSubcategoria); } 
  function cambiarCardinalidadVivienta(nuevaCardinalidad) { setCardinalidadVivienta(nuevaCardinalidad); } 
  function cambiarPrimas(nuevaPrima) { setPrimas(nuevaPrima); } 

  
  // Funcion que se ejecuta al enviar el formulario, si las validaciones son exitosas
  const onSubmit = data => {
   
    let fechaFormateada = 
      (fechaNacimiento.getDate()).toString() + '/' +
      (fechaNacimiento.getMonth()+1).toString() + '/' + 
      (fechaNacimiento.getFullYear()).toString();

    data.fechaNacimiento = fechaFormateada;
      
      fechaFormateada = 
      (fechaIngreso.getDate()).toString() + '/' +
      (fechaIngreso.getMonth()+1).toString() + '/' + 
      (fechaIngreso.getFullYear()).toString();

    data.fechaIngreso = fechaFormateada;

    // Se acoplan los datos de los datagrids NO implícitos por el register de react-hook-form
    data.personasaCargo = personasaCargo;
    data.referenciasFamiliares = referenciasFamiliares;  
    data.categoria = categoria
    data.vez = vez
    data.subcategoria = subcategoria
    data.cardinalidadvivienda = cardinalidadVivienta
    data.primas = primas


    console.log(data);

    // alert(JSON.stringify(data));
    //alert(JSON.stringify(referenciasFamiliares));
    
    axios.post(URL, data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          //alert('fallo creando pedido' + error);
          console.log(error)
        });         
  };   


  return (    

    <Container fluid>
      
      <h2 className="text-center mb-5">SOLICITUD DE CRÉDITO</h2> {/*Encabezado del formulario*/}    
    
      <FormContext {...methods}>
        <Form onSubmit = {handleSubmit(onSubmit)} >          
                    
          <InformacionPersonalFuncionario 
            fechaNacimiento={fechaNacimiento} cambiarFechaNacimiento={cambiarFechaNacimiento} 
            personasaCargo={personasaCargo} cambiarPersonasaCargo={cambiarPersonasaCargo}/>

          <ReferenciasFamiliares 
            referenciasFamiliares={referenciasFamiliares} cambiarReferenciasFamiliares={cambiarReferenciasFamiliares}/>

          <InformacionLaboralFuncionario             
            fechaIngreso={fechaIngreso} cambiarFechaIngreso={cambiarFechaIngreso}/>

          <InformacionSolicitudDelCredito 
            categoria={categoria} cambiarCategoria={cambiarCategoria}
            vez={vez} cambiarVez={cambiarVez}
            subcategoria={subcategoria} cambiarSubcategoria={cambiarSubcategoria}
            cardinalidadVivienta={cardinalidadVivienta} cambiarCardinalidadVivienta={cambiarCardinalidadVivienta}
            primas={primas} cambiarPrimas={cambiarPrimas}/>

          <Button size="lg" variant="primary" type="submit">{/*Enviar formulario*/}
            Enviar  
          </Button>   

          <DeclaracionAutorizacionFirma />
          
          {/*Aqui va el boton enviar */}                

        </Form>
      </FormContext>

    </Container>
  );
}

export default Main;