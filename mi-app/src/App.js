import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo freecodecamp'/>
      </div>
      <div className='contenedor-contador'>
        
      </div>
    </div>
  );
}

export default App;
