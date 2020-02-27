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
  const [personasaCargo, setPersonasaCargo] = useState([ // Datagrid de personas a cargo
    [,"", "",]
  ]);
  const [referenciasFamiliares, setReferenciasFamiliares] = useState([ // Datagrid de referencias familiares
    [,"", "",]
  ]);

  // Funciones para llamar los Setters de los hooks de las variables de estado
  function cambiarFechaNacimiento(nuevaFecha) { setFechaNacimiento(nuevaFecha); }
  function cambiarPersonasaCargo(data) { setPersonasaCargo(data); } // TODO: Buscar la manera de eliminar la primera posicion vacia (Se requiere para que encaje con las columnas del datagrid 
  function cambiarReferenciasFamiliares(data) { setReferenciasFamiliares(data); } 

  
  // Funcion que se ejecuta al enviar el formulario, si las validaciones son exitosas
  const onSubmit = data => {
   
    let fechaFormateada = 
      (fechaNacimiento.getDate()).toString() + '/' +
      (fechaNacimiento.getMonth()+1).toString() + '/' + 
      (fechaNacimiento.getFullYear()).toString();
    
    // Se acoplan los datos NO implícitos por el register de react-hook-form
    data.personasaCargo = personasaCargo;
    data.referenciasFamiliares = referenciasFamiliares;
    data.fechaNacimiento = fechaFormateada;

    console.log(data);

    // alert(JSON.stringify(data));
    alert(JSON.stringify(referenciasFamiliares));

    
    axios.post(URL, data)
        .then(response => {
          console.log(response);
          console.log('data ' + response.data);         
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

          <Button size="lg" variant="primary" type="submit">{/*Enviar formulario*/}
            Enviar  
          </Button>   
                    
          <InformacionPersonalFuncionario 
            fechaNacimiento={fechaNacimiento} cambiarFechaNacimiento={cambiarFechaNacimiento} 
            personasaCargo={personasaCargo} cambiarPersonasaCargo={cambiarPersonasaCargo}/>

          <ReferenciasFamiliares 
            referenciasFamiliares={referenciasFamiliares} cambiarReferenciasFamiliares={cambiarReferenciasFamiliares}/>

          <InformacionLaboralFuncionario />

          <InformacionSolicitudDelCredito />

          <DeclaracionAutorizacionFirma />
          
          {/*Aqui va el boton enviar */}                

        </Form>
      </FormContext>

    </Container>
  );
}

export default Main;