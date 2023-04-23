import React, {useEffect, useState} from 'react'

function App() {
  // const[backendData, setBackendData] = useState([{}]);
  const[menuCollapse, setMenuCollapse] = useState(false);
  
  // useEffect(() => {
  //   fetch("/count").then(
  //     reponse => reponse.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // },[])

  return (
    <div>
      <nav className={menuCollapse ? "navBar expanded" : "navBar"}>
        <img className='logo' src="./assets/shared/logo.svg" alt="logo" />
        <button onClick={() => menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)} 
          className='hamburgerButton'><img className='hamburger' src="./assets/shared/icon-hamburger.svg" alt="menu button" />
        </button>

        <ul className='navItems'>
          <li className='underline firstNumberNav'><p>00</p><a href="#">HOME</a></li>
          <li><p>01</p><a href="#">DESTINATION</a></li>
          <li><p>02</p><a href="#">CREW</a></li>
          <li><p>03</p><a href="#">TECHNOLOGY</a></li>
        </ul>
      </nav>
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
    </div>
  )
}

export default App;