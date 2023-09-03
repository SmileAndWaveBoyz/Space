import React, {useState} from 'react';
import ImageSliderTechnology from './Components/ImageSliderTechnology';

function Technology() {
  const slides = [
    { url: "./assets/technology/image-launch-vehicle-landscape.jpg"},
    { url: "./assets/technology/image-space-capsule-landscape.jpg"},
    { url: "./assets/technology/image-spaceport-landscape.jpg"}
  ];
  const slidesPortrait = [
    { url: "./assets/technology/image-launch-vehicle-portrait.jpg"},
    { url: "./assets/technology/image-space-capsule-portrait.jpg"},
    { url: "./assets/technology/image-spaceport-portrait.jpg"}
  ];
  
  const[crewHeading, setCrewHeading] = useState("Douglas Hurley");
  const[infoTextCrew, setInfoTextCrew] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
  const[windowWidth, setWindowWidth] = useState(window.innerWidth);
  const[carouselHeight, setCarouselHeight] = useState(window.innerWidth / 2.47741935484);
  const[currentSlide, setCurrentSlide] = useState(0);
  window.addEventListener('resize', (event) => {
    setWindowWidth(event.target.innerWidth);
    setCarouselHeight((window.innerWidth / 2.47741935484) + "px");
  });

  function changeSlide(index) {
    setCurrentSlide(index);
    switch (index) {
      case 0:
        setCrewHeading("LAUNCH VEHICLE");
        setInfoTextCrew("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
        break;
    
      case 1:
        setCrewHeading("SPACEPORT");
        setInfoTextCrew("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
        break;
    
      case 2:
        setCrewHeading("SPACE CAPSULE");
        setInfoTextCrew("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to re-enter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
        break;
    
      default:
        break;
    }
  }

  return (
    <main>
        <div className="imageBox" data-aos="fade-left">
            <div className="pickYourDestinationBox techPage">
                <h2 className="pickYourDestinationNumber">03</h2>
                <h2 className="pickYourDestination animate__animated animate__backInDown">SPACE LAUNCH 101</h2>
            </div>
        </div>

        <div className='containerStylesMobile techPage' style= {{height: carouselHeight}}>
          <ImageSliderTechnology slides={slides} parentWidth={windowWidth} changeSlide={changeSlide} setSlide={currentSlide}/>
          <div className="dotsContainerStylesNumber mobile techPage">
              {slides.map((slide, slideIndex) => (
                slideIndex == currentSlide 
                ?
                <div className="dotNumber activeDotNumber" key={slideIndex} onClick={() => changeSlide(slideIndex)}>{slideIndex + 1}</div>
                :
                <div className="dotNumber" key={slideIndex} onClick={() => changeSlide(slideIndex)}>{slideIndex + 1}</div>
              ))}
          </div>
        </div>
        
        <div className="techGrid">
          <div className="techTextGrid">
            <div className="buttonsAndText">
                <div className="dotsContainerStylesNumber desktop">
                  {slides.map((slide, slideIndex) => (
                    slideIndex == currentSlide 
                    ?
                    <div className="dotNumber activeDotNumber" key={slideIndex} onClick={() => changeSlide(slideIndex)}>{slideIndex + 1}</div>
                    :
                    <div className="dotNumber" key={slideIndex} onClick={() => changeSlide(slideIndex)}>{slideIndex + 1}</div>
                  ))}
                </div> 
              <div className="textGridTech" data-aos="flip-down">
                <h3 className="titleHeading techPage">THE TERMINOLOGY...</h3>
                <h2 className="crewHeading">{crewHeading}</h2>
                <p className="infoTextTech">{infoTextCrew}</p>
              </div>
            </div>
          </div>
            <div className='containerStylesDesktop techPage' style= {{height: "527px", width:"515px"}}>
              <ImageSliderTechnology slides={slidesPortrait} parentWidth={515} changeSlide={changeSlide} setSlide={currentSlide}/>
            </div>
        </div>
    </main>
  )
}

export default Technology;