import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddProduct = ({ toggleAddProduct, handleAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, stock, description, image });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('description', description);
    formData.append('image', image);

    axios
      .post('http://localhost:3001/api/product/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        handleAddProduct({
          name,
          price,
          stock,
          description,
          imagePreview: URL.createObjectURL(image),
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setName('');
    setPrice('');
    setStock('');
    setDescription('');
    setImage(null);
    setImagePreview(null);

    toggleAddProduct();
  };


  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={handleStockChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="image">Choose Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
          />
        </div>
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="image-preview" />
        )}
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
