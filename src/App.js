import React from "react"; /* a partir de la version 17 no es necesario importqar la libreria React  */
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg="hola es otra manera de poner mensajes "> </Componente>  
        <hr/> 
        {/* <Propiedades > </Propiedades>  */}
        <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={19}
        numero2={21} // Si lo sacamos nos saltar un error enconsola con el mensaje que la variable es requerida
        booleano={true}
        booleano2={false}
        array={[1,2,3]}
        objeto={{nombre:"Axel", email:"axel@axel.com"}}
        funcion={(num) => num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteoReact={<Componente msg="Soy un componente pasado como prop"/>}

        

  
         />
      </section>
      </header>
    
    </div>
  );
}

export default App;