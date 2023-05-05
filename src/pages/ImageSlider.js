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

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      // goToNext(); // Autoplay
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (

    <div className="sliderStyles">
      <div style={slidesContainerOverflowStyles}>
        <div className="sliderContainer" style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div className="imageDiv" key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
          ))}
        </div>
      </div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div className="dot" key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
