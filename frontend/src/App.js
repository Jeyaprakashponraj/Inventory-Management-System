import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Components/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import AdminSidebar from './Components/Sidenavbar/AdminSidebar';
import UserSidebar from './Components/Sidenavbar/UserSidebar';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import UserDashboard from './Components/Dashboard/UserDashboard';
import UserAddProducts from './Components/Products/ProductList'
import Products from './Components/Products/Product';
import AddProduct from './Components/Products/AddProduct';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            {/* Admin Dashboard Routes */}
            <Route
              path="/app/*"
              element={
                <AdminSidebar>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="addProduct" element={<AddProduct />} />
                  </Routes>
                </AdminSidebar>
              }
            />

            {/* User Dashboard Routes */}
            <Route
              path="/user/*"
              element={
                <UserSidebar>
                  <Routes>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path='addProduct' element={<UserAddProducts />} />
                  </Routes>
                </UserSidebar>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
