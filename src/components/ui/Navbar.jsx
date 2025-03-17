import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar__left">
          <div className="navbar__menu-icon" onClick={toggleSidebar}>
            <IoMenu size="30px" />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="navbar__logo" />
          </Link>
          <span className="navbar__title">NASM_GUIA</span>
        </div>
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
            <Link to="/acerca-de">Informacion</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;