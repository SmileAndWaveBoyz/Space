import React, {useState} from 'react'
import {NavLink, Link, Route, Routes} from 'react-router-dom';
import Destinations from "./pages/Destinations";
import Main from "./pages/Main";
import Crew from './pages/Crew';


function App() {
  const[menuCollapse, setMenuCollapse] = useState(false);

  return (
    <div id='bodyDiv'>
      <nav className={menuCollapse ? "navBar expanded" : "navBar"}>
        <img className='logo' src="./assets/shared/logo.svg" alt="logo" />
        <button onClick={() => menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)} 
          className='hamburgerButton'><img className='hamburger' src="./assets/shared/icon-hamburger.svg" alt="menu button" />
        </button>
        
        <ul className='navItems'>
          <li className='firstNumberNav'><p>00</p><NavLink to="/">HOME</NavLink></li>
          <li><p>01</p><NavLink to="/destinations">DESTINATION</NavLink></li>
          <li><p>02</p><NavLink to="/crew">CREW</NavLink></li>
          <li><p>03</p><NavLink to="/technology">TECHNOLOGY</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path='/crew' element={<Crew/>} />
      </Routes>
    </div>
  )
}

export default App;
