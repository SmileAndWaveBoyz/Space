import React from "react";
import { useNavigate  } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/destination');
  }

  return (
    <main className='hero'>
      <div className="texBox">
          <h5 className='firstHeading'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='spaceHeading'>SPACE</h1>
          <p>Let's face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax, because we'll give you a truly out of this world experience!</p>
      </div>
      <div className="explore" onClick={handleClick}>
          <p><a>EXPLORE</a></p>
      </div>
    </main> 
  );
}

export default Main;
