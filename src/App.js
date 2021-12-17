import barbershopLogo from './Images/SampleImage1.png'
import Home from './Components/Home'
import Pricing from './Components/Pricing'

import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppointmentButton from './Components/AppointmentButton';

function App() {
  return (
    <Router>
       <header className="App">
          <img className="barber-logo" src={barbershopLogo} alt="Barbershop Logo"/>

          <div className='location_information'>
            <h2>Location</h2>
            <p>13610 n 99th ave, Sun City, 85351</p>
            <p>(623)440-2361</p>
          </div>
      </header>

      <Home/>
      <AppointmentButton/>

      <Routes>
        <Route  exact path="/" elements={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      
    </Router>
     
  );
}

export default App;
