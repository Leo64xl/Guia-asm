import React, { useState } from 'react'
import Navbar from '../components/ui/Navbar'
import Sidebar from '../components/ui/Sidebar'
import "../styles/Layout.css"

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`layout-children ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default Layout