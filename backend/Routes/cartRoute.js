const express = require('express');
const cartRouter = express.Router();
const { adduserCart, getuserCart, removeuserCart } = require('../Controllers/cartControllers');
const authMiddleware = require("../Middleware/middleware");

cartRouter.post("/add", authMiddleware, adduserCart);
cartRouter.post("/remove", authMiddleware, removeuserCart);
cartRouter.get("/get", authMiddleware, getuserCart);

module.exports = cartRouter;

