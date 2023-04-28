import React from "react";

function Main() {

  mediaQuerie();

  window.addEventListener("resize", () => {
    mediaQuerie();
  });
  
  function mediaQuerie() {
    let x = document.documentElement.clientWidth;
    if (x < 768) {
      document.body.style.backgroundImage = "url('./assets/home/background-home-mobile.jpg')";
      document.body.style.backgroundSize = "118%";
    } else if (x >= 768 && x < 1180) {
      document.body.style.backgroundImage = "url('./assets/home/background-home-tablet.jpg')";
      
    } else if (x > 1180 && x < 1440) {
      document.body.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
      document.body.style.backgroundSize = "132%";
    } else if (x >= 1440){
      document.body.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
      document.body.style.backgroundSize = "100%";
    }
  }

  
  

  return (
    <main className='hero'>
      <div className="texBox">
          <h5 className='firstHeading'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='spaceHeading'>SPACE</h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>
      <div className="explore">
          <p>EXPLORE</p>
      </div>
    </main> 
  );
}

export default Main;
