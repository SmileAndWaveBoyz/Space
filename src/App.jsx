import React, {useState} from 'react'
import {NavLink, Link, Route, Routes} from 'react-router-dom';
import Destinations from "./pages/Destinations";
import Main from "./pages/Main";
import Crew from './pages/Crew';


function App() {
  const[menuCollapse, setMenuCollapse] = useState(false);
  const [pageName, setPageName] = useState("home");

  function changePageName(index) {
    switch (index) {
      case 0:
        setPageName("home");
        break;
    
      case 1:
        setPageName("destination");
        break;
    
      case 2:
        setPageName("crew");
        break;
    
      case 3:
        setPageName("technology");
        break;
    
      default:
        break;
    }
  }

  return (
    <div id={pageName} className='rootDiv'>
      <nav className={menuCollapse ? "navBar expanded" : "navBar"}>
        <img className='logo' src="./assets/shared/logo.svg" alt="logo" />
        <button onClick={() => menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)} 
          className='hamburgerButton'><img className='hamburger' src="./assets/shared/icon-hamburger.svg" alt="menu button" />
        </button>
        
        <ul className='navItems'>
          <li className='firstNumberNav'><p>00</p><NavLink to="/" onClick={() => changePageName(0)}>HOME</NavLink></li>
          <li><p>01</p><NavLink to="/destinations" onClick={() => changePageName(1)}>DESTINATION</NavLink></li>
          <li><p>02</p><NavLink to="/crew" onClick={() => changePageName(2)}>CREW</NavLink></li>
          <li><p>03</p><NavLink to="/technology" onClick={() => changePageName(3)}>TECHNOLOGY</NavLink></li>
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
