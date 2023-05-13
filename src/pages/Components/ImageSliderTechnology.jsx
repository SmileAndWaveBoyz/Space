import { useCallback, useEffect, useRef, useState } from "react";

const slideStyles = {
  width: "1px",
  height: "100%",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  width: "1px",
  transition: "transform ease-out 0.3s"
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const ImageSliderTechnology = ({ slides, parentWidth, changeSlide, setSlide}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(null)
  const [touchStartY, setTouchStartY] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  const [touchEndY, setTouchEndY] = useState(null)

  useEffect(() => {
    goToSlide(setSlide);
    // console.log("set slide is: " + setSlide + " current slide is " + currentIndex);
  }, [setSlide]);

  //This code is just to detect swipes on mobile devices
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 10; 

  const onTouchStart = (e) => {
    setTouchEndX(null) // otherwise the swipe is fired even with usual touch events
    setTouchEndY(null) // otherwise the swipe is fired even with usual touch events
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
    setTouchEndY(e.targetTouches[0].clientY)
  }

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return
    const distanceX = touchStartX - touchEndX
    const distanceY = touchStartY - touchEndY
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    
    if (isRightSwipe && Math.abs(distanceX) > distanceY) {
      goToPrevious();
    } 
    if (isLeftSwipe && distanceX > distanceY) {
      goToNext();
    }
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });


  useEffect(() => {   //This will update the text in the body of the page 
    changeSlideComponent(currentIndex);
  },[currentIndex])

  function changeSlideComponent(i) {   //This will update the text in the body of the page 
    changeSlide(i);
  }

  return (

    <div className="sliderStyles">
      <div style={slidesContainerOverflowStyles}>
        <div className="sliderContainer" style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div className="imageDiv" key={slideIndex} style={getSlideStylesWithBackground(slideIndex)} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}></div>
          ))}
        </div>
      </div>
      {/* <div className="dotsContainerStylesNumber">
        {slides.map((slide, slideIndex) => (
          slideIndex == currentIndex 
          ?
          <div className="dotNumber activeDotNumber" key={slideIndex} onClick={() => goToSlide(slideIndex)}>{slideIndex + 1}</div>
          :
          <div className="dotNumber" key={slideIndex} onClick={() => goToSlide(slideIndex)}>{slideIndex + 1}</div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSliderTechnology;
