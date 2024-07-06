import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import image from '../../Images/download.jpeg'
const Product = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [cartItem, setCartItem] = useState({});
  const [cartCounts, setCartCounts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/product/list');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const addToCart = async (productId) => {
    try {
      if (!cartItem[productId]) {
        setCartItem((prev) => ({ ...prev, [productId]: 1 }));
        setCartCounts((prevCounts) => ({ ...prevCounts, [productId]: 1 }));
      } else {
        setCartItem((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
        setCartCounts((prevCounts) => ({ ...prevCounts, [productId]: prevCounts[productId] + 1 }));
      }

      if (token) {
        const response = await axios.post(
          "http://localhost:3001/api/cart/add",
          { userId: "66885857fa87bf0d32b5beca", itemId: productId },
          { headers: { token } }
        );

        console.log("Add to cart response:", response.data);
      }
    } catch (error) {
      console.error("Error adding to cart:", error.response.data);
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized request. Token may be invalid or expired.");
      }
    }
  };

  const removeFromCart = async (productId) => {
    if (cartCounts[productId] > 0) {
      setCartCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/cart/remove",
          { userId: "66885857fa87bf0d32b5beca", itemId: productId },
          { headers: { token } }
        );
        console.log("Remove from cart response:", response.data);
      } catch (error) {
        console.error("Error removing from cart:", error.response.data);
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized request. Token may be invalid or expired.");
        }
      }
    }
  };

  return (
    <div className="product-page">
      <div className="product-list">
        <h2>Added Products</h2>
        <div className="product-cards">
          {products.map((product, index) => (
            <div key={product._id} className="card-deck">
              <div className="card">
                <img
                  src={image}
                  alt="Product Preview"
                  className="product-image"
                />
                <div className="card-body">
                  <h6 className="card-title">Item : {product.name}</h6>
                  <p className="card-text">Price : {product.price}</p>
                  <div className="cart-actions">
                    <button className="cart-button" onClick={() => removeFromCart(product._id)}>
                      <RiSubtractLine />
                    </button>
                    <span className="cart-count">{cartCounts[product._id] || 0}</span>
                    <button className="cart-button" onClick={() => addToCart(product._id)}>
                      <RiAddLine />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
