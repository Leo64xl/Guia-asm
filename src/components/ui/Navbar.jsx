import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTerminal, FaCogs, FaAssistiveListeningSystems, FaLightbulb } from 'react-icons/fa';
import { IoHardwareChip, IoCodeSlash, IoInformationCircleSharp, IoMenu } from 'react-icons/io5';
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar__left">
          {!isMobile && (
            <div className="navbar__menu-icon" onClick={toggleSidebar}>
              <IoMenu size="30px" />
            </div>
          )}
          <div className="navbar_menu_icon" onClick={toggleSidebar}>{/* Es indispensable es el de computadoras, no tocar! */}
            <IoMenu size="30px" />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="navbar__logo" />
          </Link>
          <span className="navbar__title">NASM_GUIA</span>
        </div>

        {isMobile ? (
          <div className="navbar__burger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars size="30px" />
          </div>
        ) : (
          <ul className="navbar__menu">
            <li className={`navbar__menu-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Introducción</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/registros-internos' ? 'active' : ''}`}>
              <Link to="/registros-internos">Registros</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/modos-direccionamiento' ? 'active' : ''}`}>
              <Link to="/modos-direccionamiento">Memoria</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/juego-instrucciones' ? 'active' : ''}`}>
              <Link to="/juego-instrucciones">Instrucciones</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/etiquetas-comentarios-directivas' ? 'active' : ''}`}>
              <Link to="/etiquetas-comentarios-directivas">Etiquetas</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/problemas' ? 'active' : ''}`}>
              <Link to="/problemas">Problemas</Link>
            </li>
            <li className={`navbar__menu-item ${location.pathname === '/acerca-de' ? 'active' : ''}`}>
              <Link to="/acerca-de">Información</Link>
            </li>
          </ul>
        )}
      </nav>

      {isMobile && isMobileMenuOpen && (
        <ul className="navbar__mobile-menu">
          <li className={`navbar__mobile-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Introducción <FaTerminal size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item ${location.pathname === '/registros-internos' ? 'active' : ''}`}>
            <Link to="/registros-internos" onClick={() => setIsMobileMenuOpen(false)}>Registros <FaCogs size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item ${location.pathname === '/modos-direccionamiento' ? 'active' : ''}`}>
            <Link to="/modos-direccionamiento" onClick={() => setIsMobileMenuOpen(false)}>Memoria <IoHardwareChip size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item ${location.pathname === '/juego-instrucciones' ? 'active' : ''}`}>
            <Link to="/juego-instrucciones" onClick={() => setIsMobileMenuOpen(false)}>Instrucciones <FaAssistiveListeningSystems size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item ${location.pathname === '/etiquetas-comentarios-directivas' ? 'active' : ''}`}>
            <Link to="/etiquetas-comentarios-directivas" onClick={() => setIsMobileMenuOpen(false)}>Etiquetas <IoCodeSlash size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item ${location.pathname === '/problemas' ? 'active' : ''}`}>
            <Link to="/problemas" onClick={() => setIsMobileMenuOpen(false)}>Problemas <FaLightbulb size="20px"/></Link>
          </li>
          <li className={`navbar__mobile-item navbar__mobile-footer ${location.pathname === '/acerca-de' ? 'active' : ''}`}>
            <Link to="/acerca-de" onClick={() => setIsMobileMenuOpen(false)}>Información <IoInformationCircleSharp size="20px"/></Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;