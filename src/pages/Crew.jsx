import React from "react";
import {Link} from 'react-router-dom';

function Crew() {

  mediaQuerie();

  window.addEventListener("resize", () => {
    mediaQuerie();
  });

  function mediaQuerie() {
    let x = document.documentElement.clientWidth;
    if (x < 768) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-mobile.jpg')";
      document.body.style.backgroundSize = "100%";
    } else if (x >= 768 && x < 1180) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-tablet.jpg')";
      
    } else if (x > 1180 && x < 1440) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
      document.body.style.backgroundSize = "132%";
    } else if (x >= 1440){
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
      document.body.style.backgroundSize = "100%";
    }
  }
  
  return (
    <main className='hero'>
      <div className="imageBox">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">02</h2>
          <h2 className="pickYourDestination animate__animated animate__backInDown">MEET YOUR CREW</h2>
        </div>
          <img className="crewImage" src="./assets/crew/image-douglas-hurley.webp" alt="" />
          <div className="infoTextLine"></div>
      </div>
      <div className="plannetBox">
        <nav className="plannetSelectNav">
          <ul className='navPlannetItems'>

          </ul>
        </nav>
        <h3 className="titleHeading">COMMANDER</h3>
        <h2 className="crewHeading">Douglas Hurley</h2>
          <p className="infoText">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
  
    </main> 
  );
}

export default Crew;
