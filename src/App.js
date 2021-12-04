import barbershopLogo from './Images/SampleImage1.png'
import Home from './Components/Home'
import Pricing from './Components/Pricing'

import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
       <header className="App">
          <img src={barbershopLogo} alt="Barbershop Logo"/>
      </header>

      <Home/>

      <Routes>
        <Route  exact path="/" elements={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      
    </Router>
     
  );
}

export default App;
