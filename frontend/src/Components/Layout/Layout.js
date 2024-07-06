import React from 'react';
import Sidebar from '../Sidenavbar/Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

