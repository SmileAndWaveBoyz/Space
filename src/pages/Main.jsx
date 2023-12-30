import React from "react";
import { useNavigate  } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/destination');
  }

  return (
    <main className='hero'>
      <div className="texBox" data-aos="fade-up">
          <h5 className='firstHeading'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='spaceHeading'>SPACE</h1>
          <p>In the beginning the Universe was created. This has made many people very angry and has been widely regarded as a bad move.</p>
      </div>
      <div className="explore"  onClick={handleClick}>
          <p><a>EXPLORE</a></p>
      </div>
    </main> 
  );
}

export default Main;
