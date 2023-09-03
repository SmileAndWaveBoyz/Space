import React, { useState } from "react";
import {Link} from 'react-router-dom';

function Destinations() { 
  const [plannetImage, setPlannetImage] = useState("./assets/destination/image-moon.webp");
  const [planetHeading, setPlanetHeading] = useState("MOON");
  const [infoText, setInfoText] = useState("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
  const [avgDistanceNumber, setAvgDistanceNumber] = useState("384,000 KM");
  const [estTravelNumber, setEstTravelNumber] = useState("3 DAYS");

  return (
    <main className='hero'>
      <div className="imageBox" data-aos="fade-right">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">01</h2>
          <h2 className="pickYourDestination animate__animated animate__backInDown">PICK YOUR DESTINATION</h2>
        </div>
          <img className="plannetImage" src={plannetImage} alt={planetHeading} />
      </div>
      <div className="plannetBox" data-aos="fade-up">
        <nav className="plannetSelectNav">
          <ul className={'navPlannetItems ' + planetHeading}>
            <li><Link onClick={() => {
                setPlannetImage("./assets/destination/image-moon.webp");
                setPlanetHeading("MOON");
                setInfoText("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
                setAvgDistanceNumber("384,000 KM");
                setEstTravelNumber("3 DAYS");
              }}>MOON</Link></li>
            <li><Link onClick={() => {
                setPlannetImage("./assets/destination/image-mars.webp");
                setPlanetHeading("MARS");
                setInfoText("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
                setAvgDistanceNumber("225 MIL. KM");
                setEstTravelNumber("9 MONTHS");
              }}>MARS</Link></li>
            <li><Link onClick={() => {
                setPlannetImage("./assets/destination/image-europa.webp");
                setPlanetHeading("EUROPA");
                setInfoText("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
                setAvgDistanceNumber("628 MIL. KM");
                setEstTravelNumber("3 YEARS");
              }}>EUROPA</Link></li>
            <li><Link onClick={() => {
                setPlannetImage("./assets/destination/image-titan.webp");
                setPlanetHeading("TITAN");
                setInfoText("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
                setAvgDistanceNumber("1.6 BIL. KM");
                setEstTravelNumber("7 YEARS ");
              }}>TITAN</Link></li>

              <div className="underlineDivPlannets"></div>
          </ul>
        </nav>
        <h1 className="planetHeading">{planetHeading}</h1>
          <p className="infoText">{infoText}</p>
          <div className="infoTextLine"></div>
          <footer>
            <div className="distanceTextBox">
              <h4>AVG. DISTANCE</h4>
              <p className="avgDistanceNumber">{avgDistanceNumber}</p>
            </div>
            <div className="estTravelTimeTextBox">
              <h4>EST. TRAVEL TIME</h4>
              <p className="estTravelNumber">{estTravelNumber}</p>
            </div>
          </footer>
      </div>
  
    </main> 
  );
}

export default Destinations;
