import React, {useState} from 'react'
import ImageSliderTechnology from './Components/ImageSliderTechnology';

function Crew() { 
  
  const slides = [
    { url: "./assets/crew/image-douglas-hurley.webp"},
    { url: "./assets/crew/image-mark-shuttleworth.webp"},
    { url: "./assets/crew/image-victor-glover.webp"},
    { url: "./assets/crew/image-anousheh-ansari.webp"}
  ];

  const[titleHeading, setTitleHeading] = useState("COMMANDER");
  const[crewHeading, setCrewHeading] = useState("Douglas Hurley");
  const[infoTextCrew, setInfoTextCrew] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
  
  let reziseWindowWidth = window.innerWidth;
  if (reziseWindowWidth > 900 && reziseWindowWidth < 1280) {
    // console.log("We'll resize " + reziseWindowWidth);
    reziseWindowWidth = 700;
  } 

  const[windowWidth, setWindowWidth] = useState(reziseWindowWidth);
  const[carouselHeight, setCarouselHeight] = useState(windowWidth / 1.466367713);
  const[currentSlide, setCurrentSlide] = useState(0);


  window.addEventListener('resize', () => {
    reziseWindowWidth = window.innerWidth;
    if (reziseWindowWidth > 900 && reziseWindowWidth < 1280) {
      // console.log("We'll resize " + reziseWindowWidth);
      reziseWindowWidth = 700;
    } 
    setWindowWidth(reziseWindowWidth);
    setCarouselHeight((reziseWindowWidth / 1.466367713) + "px");
    // console.log(window.innerWidth);
    
  });

  function changeSlide(index) {
    setCurrentSlide(index);
    switch (index) {
      case 0:
        setTitleHeading("COMMANDER");
        setCrewHeading("Douglas Hurley");
        setInfoTextCrew("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
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
    <main>
      <div className="imageBox" data-aos="fade-left">
        <div className="pickYourDestinationBox">
          <h2 className="pickYourDestinationNumber">02</h2>
          <h2 className="pickYourDestination animate__animated animate__backInDown">MEET YOUR CREW</h2>
        </div>
      </div>
        <div>
          <div className='containerStylesMobile crewPage' style= {{height: carouselHeight}}>
            <ImageSliderTechnology slides={slides} parentWidth={windowWidth} changeSlide={changeSlide} setSlide={currentSlide}/>
            <div className="infoTextLine"></div>
          </div>
          <div className="dotsContainerStylesNumber mobile">
                {slides.map((slide, slideIndex) => (
                  slideIndex == currentSlide 
                  ?
                  <div className="dot activeDot" key={slideIndex} onClick={() => changeSlide(slideIndex)}>●</div>
                  :
                  <div className="dot" key={slideIndex} onClick={() => changeSlide(slideIndex)}>●</div>
                ))}
          </div>
        </div>

          <div className="techGrid">
            <div className="textGrid">
              <div className="buttonsAndText Crew">

                <div className="textGridCrew" data-aos="fade-up">
                  <h3 className="titleHeading">{titleHeading}</h3>
                  <h2 className="crewHeading">{crewHeading}</h2>
                  <p className="infoTextCrew">{infoTextCrew}</p>
                </div>

                <div className="dotsContainerStylesCrew desktop">
                  {slides.map((slide, slideIndex) => (
                    slideIndex == currentSlide 
                    ?
                    <div className="dot activeDot" key={slideIndex} onClick={() => changeSlide(slideIndex)}>●</div>
                    :
                    <div className="dot" key={slideIndex} onClick={() => changeSlide(slideIndex)}>●</div>
                  ))}
                </div> 
              </div>
            </div>
            <div className='containerStylesDesktop crewPage' style= {{height: "712px", width:"568.07px", transform: `translate(${0}px, ${-50}px)`}}>
              <ImageSliderTechnology slides={slides} parentWidth={568.07} changeSlide={changeSlide} setSlide={currentSlide}/>
            </div>
        </div>

  
    </main> 
  );
}

export default Crew;
