import React from 'react'
import barbershopLogo from './Images/SampleImage1.png'
import Home from './Components/Home'
import Administrator from './Components/Administrator';


import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import AppointmentButton from './Components/AppointmentButton';

function App() {

  return (
    <Router>
       <header className="App">
          <img className="barber-logo" src={barbershopLogo} alt="Barbershop Logo"/>

          <img className="group-image" src="https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/group-pic.jpg" alt="Barbershop Logo"/>
      </header>

      <Home />
      <AppointmentButton/>

      
      
    </Router>
     
  );
}

export default App;
