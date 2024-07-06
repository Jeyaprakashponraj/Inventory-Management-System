const express = require('express');
const { addProduct, listProduct, removeProduct } = require("../Controllers/productController");
const productRouter = express.Router();
const multer = require("multer")

// IMAGE STORAGE ENGINE

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//  http://localhost:001/api/product/add
productRouter.post("/add", upload.single("image"), addProduct);

//  http://localhost:3001/api/product/list

productRouter.get("/list", listProduct);

//   http://localhost:3001/api/product/delete

productRouter.delete("/delete/:id", removeProduct);

module.exports = productRouter;