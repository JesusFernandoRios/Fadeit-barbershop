import React from 'react'
import barbershopLogo from './Images/White-logo.png'
import Home from './Components/Home'


import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import AppointmentButton from './Components/AppointmentButton';

function App() {

  return (
    <Router>
       <header className="App">
          <img className="barber-logo" src={barbershopLogo} alt="Barbershop Logo"/>

          <div className='location_information'>
                <h1>Location</h1>
                <p>13610 N 99th Ave, Sun City, 85351</p>
                <a href="tel:623-440-2361">(623)440-2361</a>
          </div>


          {/* <img className="group-image" src="https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/group-pic.jpg" alt="Barbershop Logo"/> */}
      </header>

      <Home />
      <AppointmentButton/>

      
      
    </Router>
     
  );
}

export default App;
