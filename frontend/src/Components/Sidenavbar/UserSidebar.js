
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const UserSidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/user/dashboard" className="text-decoration-none" style={{ color: 'inherit' }}>
            User Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/user/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/user/addProduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-box">Add Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      <main style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
};

export default UserSidebar;
