import React from "react";
import {Link, Route, Routes} from 'react-router-dom';

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
            <li><Link className="moonLink active" onClick={() => {
                document.querySelector(".moonLink").classList.add("active");
                document.querySelector(".marsLink").classList.remove("active");
                document.querySelector(".europaLink").classList.remove("active");
                document.querySelector(".titanLink").classList.remove("active");
                document.querySelector(".plannetImage").src="./assets/destination/image-moon.webp";
                document.querySelector(".planetHeading").innerHTML="MOON";
                document.querySelector(".infoText").innerHTML="See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
                document.querySelector(".avgDistanceNumber").innerHTML="384,000 KM";
                document.querySelector(".estTravelNumber").innerHTML="3 DAYS";
              }}>MOON</Link></li>
            <li><Link className="marsLink" onClick={() => {
                document.querySelector(".marsLink").classList.add("active");
                document.querySelector(".moonLink").classList.remove("active");
                document.querySelector(".europaLink").classList.remove("active");
                document.querySelector(".titanLink").classList.remove("active");
                document.querySelector(".plannetImage").src="./assets/destination/image-mars.webp";
                document.querySelector(".planetHeading").innerHTML="MARS";
                document.querySelector(".infoText").innerHTML="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
                document.querySelector(".avgDistanceNumber").innerHTML="225 MIL. KM";
                document.querySelector(".estTravelNumber").innerHTML="9 MONTHS";
              }}>MARS</Link></li>
            <li><Link className="europaLink" onClick={() => {
                document.querySelector(".europaLink").classList.add("active");
                document.querySelector(".moonLink").classList.remove("active");
                document.querySelector(".titanLink").classList.remove("active");
                document.querySelector(".marsLink").classList.remove("active");
                document.querySelector(".plannetImage").src="./assets/destination/image-europa.webp";
                document.querySelector(".planetHeading").innerHTML="EUROPA";
                document.querySelector(".infoText").innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
                document.querySelector(".avgDistanceNumber").innerHTML="628 MIL. KM";
                document.querySelector(".estTravelNumber").innerHTML="3 YEARS";
              }}>EUROPA</Link></li>
            <li><Link className="titanLink" onClick={() => {
                document.querySelector(".titanLink").classList.add("active");
                document.querySelector(".moonLink").classList.remove("active");
                document.querySelector(".europaLink").classList.remove("active");
                document.querySelector(".europaLink").classList.remove("active");
                document.querySelector(".plannetImage").src="./assets/destination/image-titan.webp";
                document.querySelector(".planetHeading").innerHTML="TITAN";
                document.querySelector(".infoText").innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
                document.querySelector(".avgDistanceNumber").innerHTML="1.6 BIL. KM";
                document.querySelector(".estTravelNumber").innerHTML="7 YEARS ";
              }}>TITAN</Link></li>
          </ul>
        </nav>
        <h1 className="planetHeading">MOON</h1>
          <p className="infoText">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <div className="infoTextLine"></div>
          <footer>
            <div className="distanceTextBox">
              <h4>AVG. DISTANCE</h4>
              <p className="avgDistanceNumber">384,000 KM</p>
            </div>
            <div className="estTravelTimeTextBox">
              <h4>EST. TRAVEL TIME</h4>
              <p className="estTravelNumber">3 DAYS</p>
            </div>
          </footer>
      </div>
  
    </main> 
  );
}

export default Destinations;
