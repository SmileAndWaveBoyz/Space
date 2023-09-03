import React, {useState, useEffect, useRef} from 'react'
import {NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Destinations from "./pages/Destinations";
import Main from "./pages/Main";
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { useNavigate  } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  //Hamburger button functionality
  const[menuCollapse, setMenuCollapse] = useState(false);
  const [pageName, setPageName] = useState("/");
  
  // This is just for setting the full page ID so we can change it's backround. 
  const location = useLocation();
  const navigate = useNavigate();
  function handleLogoClick() {
    navigate('/');
  }

  const[hamburgerButtonOpen, setHamburgerButtonOpen] = useState(false);

  useEffect(() => {
    AOS.init(); // This initiates the animate on scroll library
  }, []);
  
  useEffect(() => { 
    let destination = location.pathname.slice(1);
    if (location.pathname ===  "/") {
      setPageName("home");
      setMenuCollapse(false)
    } else if (location.pathname ===  "/destination"){
      setPageName(destination);
      setMenuCollapse(false)
    } else if (location.pathname ===  "/crew"){
      setPageName(destination);
      setMenuCollapse(false)
    } else if (location.pathname ===  "/technology"){
      setPageName(destination);
      setMenuCollapse(false)
    } else{
      setPageName(destination);
      setMenuCollapse(false)
    }

  }, [location]);

  return (
    <div id={pageName} className='rootDiv'>
      <nav className={menuCollapse ? "navBar expanded" : "navBar"}>
        <img className='logo' src="./assets/shared/logo.svg" alt="logo" onClick={handleLogoClick}/>
        <button onClick={
          () => {
            hamburgerButtonOpen ? setHamburgerButtonOpen(false) : setHamburgerButtonOpen(true);
            menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
          }
        } 
          // className='hamburgerButton'><img className='hamburger' src="./assets/shared/icon-hamburger.svg" alt="menu button" />
          className='hamburgerButton'>
            <div id="hamburgerButtonIcon" className={hamburgerButtonOpen ? `open` : null}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </button>
        <div className="navItemsContainer">
          {/* <button className='xButton' onClick={() => setMenuCollapse(false)}>x</button> */}
          <ul className={'navItems ' + pageName}>
            <li className='firstNumberNav'><p>00</p><NavLink to="/">HOME</NavLink></li>
            <li><p>01</p><NavLink to="/destination">DESTINATION</NavLink></li>
            <li><p>02</p><NavLink to="/crew">CREW</NavLink></li>
            <li><p>03</p><NavLink to="/technology">TECHNOLOGY</NavLink></li>
            <div className="underlineDiv"></div>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>} />
        <Route path='/destination' element={<Destinations/>}/>
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </div>
  )
}

export default App;
