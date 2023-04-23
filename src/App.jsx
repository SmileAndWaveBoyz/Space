import React, {useEffect, useState} from 'react'

function App() {
  const[backendData, setBackendData] = useState([{}]);
  const[menuCollapse, setMenuCollapse] = useState(false);
  
  useEffect(() => {
    fetch("/count").then(
      reponse => reponse.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])

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
      <div className="texBox">
        <h5 className='firstHeading'>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well<br></br> genuinely go to outer space and not hover kind of on the <br></br>edge of it. Well sit back, and relax because we'll give you a <br></br>truly out of this world experience!</p>
      </div>
    </div>
  )
}

export default App