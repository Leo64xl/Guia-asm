import React from 'react'
import "./Footer.css"

const Footer = ({ isSidebarOpen }) => {
  return (
    <div className={`footer ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="footer__content">
        <span className="footer__text">&copy; 2025 NASM_GUIA. Todos los derechos reservados.</span>        
      </div>
    </div>
  )
}

export default Footer