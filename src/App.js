import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './form/main';
import Test from './form/test_class';


const IP_SERVER = "http://54.164.83.200/";


function App() {

  return (

    <Router>

      {/* La ruta para el formulario de solicitud de crédito
            Recibe como parámero un dato por URL */}

      <Route path = "/solicitud/:data" component = {Main}></Route>

      

    </Router>
  );
}

export default App;




