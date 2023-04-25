import React from "react";

function Destinations() {

  mediaQuerie();

  window.addEventListener("resize", () => {
    mediaQuerie();
  });
  
  function mediaQuerie() {
    let x = document.documentElement.clientWidth;
    if (x < 768) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-mobile.jpg')";
      document.body.style.backgroundSize = "108%";
    } else if (x >= 768 && x < 1180) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-tablet.jpg')";
      
    } else if (x > 1180 && x < 1440) {
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
      document.body.style.backgroundSize = "132%";
    } else if (x >= 1440){
      document.body.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
      document.body.style.backgroundSize = "100%";
    }
  }
  


  return (

    <main>
        <h1>Destinations</h1>
    </main> 
  );
}

export default Destinations;
