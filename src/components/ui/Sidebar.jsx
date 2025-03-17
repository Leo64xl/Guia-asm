import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { IoHome, IoHardwareChip, IoCodeSlash, IoInformationCircleSharp } from 'react-icons/io5';
import { FaInfoCircle, FaLightbulb, FaAssistiveListeningSystems, FaCogs, FaTerminal } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {

  if (window.innerWidth <= 768) return null;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar__close" onClick={toggleSidebar}>X</button>
      <ul className="sidebar__menu">
        <Link to="/" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><FaTerminal size="20px" />Introducción</p>
        </Link>
        <Link to="/registros-internos" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><FaCogs size="20px" />Registros</p>
        </Link>
        <Link to="/modos-direccionamiento" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><IoHardwareChip size="20px" />Memoria</p>
        </Link>
        <Link to="/juego-instrucciones" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><FaAssistiveListeningSystems size="20px" />Instrucciones</p>
        </Link>
        <Link to="/etiquetas-comentarios-directivas" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><IoCodeSlash size="20px" />Etiquetas</p>
        </Link>
        <Link to="/problemas" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><FaLightbulb size="20px" />Problemas</p>
        </Link>
        <Link to="/acerca-de" className="sidebar__menu-item" onClick={toggleSidebar}>
          <p className='text-sidebar-element'><IoInformationCircleSharp size="20px" />Informacion</p>
        </Link>
      </ul>
      <div className="sidebar__footer">
        <Link to="/acerca-de" className="sidebar__footer-item" onClick={toggleSidebar}>
          <p className='text-about-asm'><FaInfoCircle size="20px" />Acerca de Ensamblador</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;