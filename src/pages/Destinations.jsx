import React from "react";
import {NavLink} from 'react-router-dom';

function Destinations() {

  mediaQuerie();

  window.addEventListener("resize", () => {
    mediaQuerie();
  });
  
  function mediaQuerie() {
    let x = document.documentElement.clientWidth;
    if (x < 768) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-mobile.jpg')";
      document.body.style.backgroundSize = "100%";
    } else if (x >= 768 && x < 1180) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-tablet.jpg')";
      
    } else if (x > 1180 && x < 1440) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
      document.body.style.backgroundSize = "132%";
    } else if (x >= 1440){
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
      document.body.style.backgroundSize = "100%";
    }
  }
  


  return (
    <main className='hero'>
      <div className="imageBox">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">01</h2>
          <h2 className="pickYourDestination">PICK YOUR DESTINATION</h2>
        </div>
          <img className="plannetImage" src="./assets/destination/image-moon.webp" alt="" />
      </div>
      <div className="plannetBox">
        <nav className="plannetSelectNav">
          <ul className='navPlannetItems'>
            <li><NavLink>MOON</NavLink></li>
            <li><NavLink>MARS</NavLink></li>
            <li><NavLink>EUROPA</NavLink></li>
            <li><NavLink>TITAN</NavLink></li>
          </ul>
        </nav>
        <h1 className="planetHeading">MOON</h1>
          <p className="infoText">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <div className="infoTextLine"></div>
          <footer>
            <div className="distanceTextBox">
              <h4>AVG. DISTANCE</h4>
              <p>384,000 KM</p>
            </div>
            <div className="estTravelTimeTextBox">
              <h4>EST. TRAVEL TIME</h4>
              <p>3 DAYS</p>
            </div>
          </footer>
      </div>
  
    </main> 
  );
}

export default Destinations;
