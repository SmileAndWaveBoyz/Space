import React, {useState} from 'react'
import ImageSlider from './ImageSlider';


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
  
  return (
    <main className='crewHero'>
      <div className="imageBox">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">02</h2>
          <h2 className="pickYourDestination animate__animated animate__backInDown">MEET YOUR CREW</h2>
        </div>
          {/* <img className="crewImage" src="./assets/crew/image-douglas-hurley.webp" alt="" /> */}
        <div className='containerStyles mobileCarousel'>
          <ImageSlider slides={slides} parentWidth={310} />
        </div>
          <div className="infoTextLine"></div>
      </div>
        <div className='crewGrid'>
        <div className="crewBox">
          <nav className="plannetSelectNav">
            <ul className='navPlannetItems'>

            </ul>
          </nav>
          <h3 className="titleHeading">COMMANDER</h3>
          <h2 className="crewHeading">Douglas Hurley</h2>
            <p className="infoTextCrew">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>

        <div className='containerStyles tabletCarousel'>
            <ImageSlider slides={slides} parentWidth={850} />
        </div>
        <div className='containerStyles desktopCarousel'>
            <ImageSlider slides={slides} parentWidth={1000} />
        </div>
        <div className='containerStyles desktopCarousel1x'>
            <ImageSlider slides={slides} parentWidth={1200} />
        </div>
        <div className='containerStyles desktopCarousel2x'>
            <ImageSlider slides={slides} parentWidth={1600} />
        </div>
      </div>
  
    </main> 
  );
}

export default Crew;
