import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import AddProduct from './AddProduct';
import axios from 'axios';
import './Product.css';
import userImage from '../../Images/images.jpeg';

const Product = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/product/delete/${productId}`);
      if (response.data.success) {
        const updatedProducts = products.filter((product) => product._id !== productId);
        setProducts(updatedProducts);
      } else {
        console.log('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/product/list');
      console.log('Fetched Products:', response.data.data); // Debugging line
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <div className='d-flex'>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className='d-flex user'>
          <div>
            <h5>Jeyaprakash</h5>
            <p>Admin Profile</p>
          </div>
          <img src={userImage} alt='user' width={55} height={55} className='admin' />
        </div>
      </div>

      <div>
        <button className="btn btn-primary mb-4" onClick={toggleAddProduct}>
          {showAddProduct ? 'Close Form' : 'Add Product'}
        </button>
      </div>

      {showAddProduct && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-btn" onClick={toggleAddProduct}>
              <FaTimes />
            </button>
            <AddProduct
              toggleAddProduct={toggleAddProduct}
              handleAddProduct={handleAddProduct}
            />
          </div>
        </div>
      )}

      {products.length > 0 && (
        <div className="product-table">
          <h2>Added Products</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>
                 
                  <td>
                    <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Product;
