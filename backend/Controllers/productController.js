const productModel = require('../Models/productModel');
const fs = require('fs')
const mongoose = require('mongoose');

exports.addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const productData = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    stock: req.body.stock,
  });
  try {
    await productData.save();
    res
      .status(200)
      .json({ success: true, message: "Product Added Successfuly" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Failed add Food Item" });
  }
}

exports.listProduct = async (req, res) => {
  try {
    const product = await productModel.find({});

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "error" });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);

    fs.unlink(`uploads/${product.image}`, () => { })
    await productModel.deleteOne({ _id: productId });

    res.status(200).json({ success: true, message: "Product Removed Successfully" });
  } catch (error) {
    console.error('Error removing product:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

