import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const AdminSidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/app/dashboard" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/app/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/app/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-box">Products</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink to="/app/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-cart">Orders</CDBSidebarMenuItem>
            </NavLink> */}
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

export default AdminSidebar;
