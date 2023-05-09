import React, {useState, useEffect} from 'react'
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';
import Destinations from "./pages/Destinations";
import Main from "./pages/Main";
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import { useNavigate  } from 'react-router-dom';

function App() {
  const[menuCollapse, setMenuCollapse] = useState(false);
  const [pageName, setPageName] = useState("/");
  const location = useLocation();

  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  useEffect(() => { // This is just for setting the full page ID so we can change it's backround. 
    let destination = location.pathname.slice(1);
    if (location.pathname ===  "/") {
      setPageName("home");
    } else{
      setPageName(destination);
    }

  }, [location]);
  
  return (
    <div id={pageName} className='rootDiv'>
      <nav className={menuCollapse ? "navBar expanded" : "navBar"}>
        <img className='logo' src="./assets/shared/logo.svg" alt="logo" onClick={handleClick}/>
        <button onClick={() => menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)} 
          className='hamburgerButton'><img className='hamburger' src="./assets/shared/icon-hamburger.svg" alt="menu button" />
        </button>
        <div className="navItemsContainer">
          <button className='xButton' onClick={() => setMenuCollapse(false)}>x</button>
          <ul className='navItems'>
            <li className='firstNumberNav' onClick={() => setMenuCollapse(false)}><p>00</p><NavLink to="/">HOME</NavLink></li>
            <li onClick={() => setMenuCollapse(false)}><p>01</p><NavLink to="/destination">DESTINATION</NavLink></li>
            <li onClick={() => setMenuCollapse(false)}><p>02</p><NavLink to="/crew">CREW</NavLink></li>
            <li onClick={() => setMenuCollapse(false)}><p>03</p><NavLink to="/technology">TECHNOLOGY</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/home' element={<Main/>} />
        <Route path='/destination' element={<Destinations/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </div>

    
  )
}

export default App;
