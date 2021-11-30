import barbershopLogo from './Images/SampleImage1.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Fade it barbershop
        </p>
        <img src={barbershopLogo} alt="Barbershop Logo"/>
      </header>

        <hr style={{color: "white" , width: 1400}}/>
    </div>
  );
}

export default App;
