import logo from './logo.svg';
import './App.css';

function App() {
  let nombre ='John';
  let auth = true;
  let meses = ["enero","febrero","marzo","abril", "mayo", "junio",
   "julio", "agosto", "septiembre","octubre","noviembre", "diciembre"];/* interpolar estructuras de control (for)*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo/*interpolar variables logo*/} className="App-logo" alt="logo" /> 
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario esta logeado":"El usuario no esta logeado" /*Interpolar expresiones condicinales*/}</p>
        <p>{2+3/*Interpolar expresiones algebraicas o aritmaticas */}</p> 
        <ul>
        {/*interpolar estructuras de control*/}
        {meses.map((el)=>(<li>{el}</li>))/* Genera un error en consola*/}<br></br> 
        {meses.map((el,index)=>(<li key={index}>{el}</li>))/* Elimina el error */} 
        </ul>
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
      </header>
    </div>
  );
}

export default App;
