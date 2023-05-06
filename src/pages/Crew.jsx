import React, {useState} from 'react'
import ImageSlider from './ImageSlider';
import Media from "react-media";


function Crew() { 
  
  const slides = [
    { url: "./assets/crew/image-douglas-hurley.webp"},
    { url: "./assets/crew/image-mark-shuttleworth.webp"},
    { url: "./assets/crew/image-victor-glover.webp"},
    { url: "./assets/crew/image-anousheh-ansari.webp"}
  ];
  
  mediaQuerie();
  window.addEventListener("resize", () => {
    mediaQuerie();
  });

  function mediaQuerie() {
    let x = document.documentElement.clientWidth;
    if (x < 768) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-mobile.jpg')";
      document.body.style.backgroundSize = "100%";
    } 
    
    else if (x >= 768 && x < 820) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-tablet.jpg')";
    } 

    else if (x >= 820 && x < 1180) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-tablet.jpg')";
      document.body.style.backgroundSize = "108%";
    } 
    
    else if (x > 1180 && x < 1440) {
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
      document.body.style.backgroundSize = "132%";
    } 
    
    else if (x >= 1440){
      document.body.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
      document.body.style.backgroundSize = "100%";
    }
  }

  const[titleHeading, setTitleHeading] = useState("COMMANDER");
  const[crewHeading, setCrewHeading] = useState("Douglas Hurley");
  const[infoTextCrew, setInfoTextCrew] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");

  function changeText(index) {
    console.log(index);
    switch (index) {
      case 0:
        setTitleHeading("COMMANDER");
        setCrewHeading("Mission Specialist");
        setInfoTextCrew("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
        break;
    
      case 1:
        setTitleHeading("MISSION SPECIALIST");
        setCrewHeading("MARK SHUTTLEWORTH");
        setInfoTextCrew("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
        break;
    
      case 2:
        setTitleHeading("PILOT");
        setCrewHeading("VICTOR GLOVER");
        setInfoTextCrew("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.");
        break;
    
      case 3:
        setTitleHeading("FLIGHT ENGINEER");
        setCrewHeading("ANOUSHEH ANSARI");
        setInfoTextCrew("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.");
        break;
    
      default:
        break;
    }
  }
  
  return (
    <main className='crewHero'>
      <div className="imageBox">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">02</h2>
          <h2 className="pickYourDestination animate__animated animate__backInDown">MEET YOUR CREW</h2>
        </div>
          {/* <img className="crewImage" src="./assets/crew/image-douglas-hurley.webp" alt="" /> */}
        
          <Media query="(max-width: 767px)">
            {(matches) => {
              return matches 
              ? 
              <div className='containerStyles'>
                <ImageSlider slides={slides} parentWidth={310} changeText={changeText}/>
              </div>
              : null;
            }}
          </Media>
          <Media query="(min-width: 768px) and (max-width: 1024px)">
            {(matches) => {
              return matches 
              ? 
              <div className='containerStyles'>
                <ImageSlider slides={slides} parentWidth={850} changeText={changeText}/>
              </div>
              : null;
            }}
          </Media>
        
          <div className="infoTextLine"></div>
      </div>
        <div className='crewGrid'>
        <div className="crewBox">
          <nav className="plannetSelectNav">
            <ul className='navPlannetItems'>

            </ul>
          </nav>
          <h3 className="titleHeading">{titleHeading}</h3>
          <h2 className="crewHeading">{crewHeading}</h2>
            <p className="infoTextCrew">{infoTextCrew}</p>
        </div>
          <Media query="(min-width: 1024px) and (max-width: 1400px)">
            {(matches) => {
              return matches 
              ? 
              <div className='containerStyles'>
                <ImageSlider slides={slides} parentWidth={1000} changeText={changeText}/>
              </div>
              : null;
            }}
          </Media>
          <Media query="(min-width: 1400px) and (max-width: 1800px)">
            {(matches) => {
              return matches 
              ? 
              <div className='containerStyles'>
                <ImageSlider slides={slides} parentWidth={1200} changeText={changeText}/>
              </div>
              : null;
            }}
          </Media>
          <Media query="(min-width: 1800px)">
            {(matches) => {
              return matches 
              ? 
              <div className='containerStyles'>
                <ImageSlider slides={slides} parentWidth={1600} changeText={changeText}/>
              </div>
              : null;
            }}
          </Media>

      </div>
  
    </main> 
  );
}

export default Crew;
